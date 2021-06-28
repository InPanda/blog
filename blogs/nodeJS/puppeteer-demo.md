---
title: puppeteer-demo
date: 2021-06-28
tags:
 - puppeteer 
categories: 
 - nodeJS
sidebar: auto
---
---

# puppeteer 爬取网站图片缩略图(爬取接口response)

puppeteer-demo
├── dist  爬取数据文件存放文件夹
├── helpers  帮助文件夹
│   ├── browser.js	判断系统环境是否有brower
│   ├── communication.js  *启动Websocket服务*
│   ├── loghelper.js  npm包 log4js，用于输出日志
│   ├── pass_webdriver.js  *重置window.navigator的属性* 反反爬虫
│   ├── process.js  子进程
│   ├── requestInterception.js  爬取接口数据
│   └── time.js  sleep函数
├── index.js  入口文件
├── LICENSE
├── logs   日志
│   └── log_date
├── package-lock.json
├── package.json  npm依赖
└── README.md

## 一.helpers

### 1.brower.js

```js
const path = require('path');
const regedit = require("regedit");
const executor = require('child_process');
const loghelper = require('./loghelper');
const fs = require("fs");
const killProcess = require('kill-process-by-name');
const request = require('request');
const isprocessRunning = require("./process");
const {
    sleep
} = require("./time");

/**
 * 判断操作系统中是否已经安装过Chrome浏览器。
 * @returns 是否已安装Chrome浏览器
 */
function findChromePath() {
    return new Promise((resolve, reject) => {
        try {
            regedit.list("HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\chrome.exe", (err, result) => {
                if (err != null) {
                    reject(err);
                } else {
                    try {
                        let chromepath = result["HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\chrome.exe"].values[""].value;
                        resolve(chromepath);
                    } catch (e) {
                        resolve("");
                    }
                }
            });
        } catch (error) {
            reject(error);
        }
    });

    //  Edge 浏览器路径：  C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
}

/**
 * 根据浏览器路径，杀掉同名进程。也就是需要重启浏览器。
 * @param {String} chromepath 浏览器路径
 */
function killChromeProcess(chromepath) {
    try {
        killProcess(path.basename(chromepath, ".exe"));
    } catch (error) {
        loghelper.error(error);
    }
}

/**
 * 检查机器中是否安装了Chrome，如果没安装，则使用绿色版Chrome进行启动。
 */
async function startBrowser(cdpPort) {
    let chromepath = await findChromePath();
    loghelper.info(`系统中${chromepath?"":"不"}存在Chrome浏览器`);
    if (!chromepath) {
        if (process.env["envMode"]) {
            chromepath = path.join(path.dirname(path.dirname(__dirname)), "GoogleChromePortable", "GoogleChromePortable.exe");
        } else {
            chromepath = path.join(path.dirname(__dirname), "GoogleChromePortable", "GoogleChromePortable.exe");
        }
    }

    if (!chromepath || !fs.existsSync(chromepath)) {
        loghelper.error("未能找到可用浏览器");
        process.exit(0);
    }

    // 启动浏览器之前，需要杀掉同名浏览器，也就是需要重新启动浏览器。
    killChromeProcess(chromepath);
    while ((await isprocessRunning(path.basename(chromepath)))) {
        await sleep(500); // 给定500毫秒，以防进程尚未全部杀死
    }
    let child = executor.spawn(chromepath, [`--remote-debugging-port=${cdpPort}`], {
        cwd: path.dirname(chromepath),
        detached: true,
        windowsHide: true
    });
    child.stdout.on('data', data => {
        // eslint-disable-next-line no-console
        loghelper.info(`${data}`);
    });
    child.stderr.on('data', (data) => {
        // eslint-disable-next-line no-console
        loghelper.error(`stderr: ${data}`);
    });
    child.on("exit", (code, signal) => {
        let msg = `Chrome exit with code:${code} and signal is: ${signal}`;
        loghelper.error(msg);
        console.error(msg);
        process.exit(0);
    });
}

/**
 * 根据浏览器CDP调试端口号，获取wsEndPort，用于puppeteer链接
 * @param {Number} port 浏览器CDP调试端口号
 * @returns WebSocet的远程调试链接地址 ws://127.0.0.1:8315/devtools/browser/...
 */
function getwsEndport(port) {
    return new Promise((resolve, reject) => {
        let versionUrl = `http://127.0.0.1:${port}/json/version`;
        try {
            request(versionUrl, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    let entity = {};
                    if (typeof body === 'string') {
                        entity = JSON.parse(body);
                    }

                    const url = entity.webSocketDebuggerUrl;
                    resolve(url);
                } else {
                    loghelper.error('链接调试接口失败！');
                    reject('链接调试接口失败！');
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    startBrowser,
    getwsEndport
};
```

### 2.communication.js

```js
const ws = require("ws");
const loghelper = require('./loghelper');
let wss = null;

/**
 * 启动Websocket服务
 * @param {Number} port WebSocket服务端口号
 * @returns ws.Server
 */
async function startServer(port) {
    try {
        wss = new ws.Server({
            port: port,
            // 最大链接数
            backlog: 1,
            perMessageDeflate: {
                zlibDeflateOptions: {
                    // See zlib defaults.
                    chunkSize: 1024 * 2,
                    memLevel: 7,
                    level: 3
                },
                zlibInflateOptions: {
                    chunkSize: 10 * 1024
                },
                // Other options settable:
                clientNoContextTakeover: true, // Defaults to negotiated value.
                serverNoContextTakeover: true, // Defaults to negotiated value.


                serverMaxWindowBits: 10, // Defaults to negotiated value.
                // Below options specified as default values.
                concurrencyLimit: 10, // Limits zlib concurrency for perf.
                threshold: 1024 // Size (in bytes) below which messages 
                // should not be compressed.
            }
        });

        wss.on('connection', function connection(wsclient) {
            wsclient.on('message', function incoming(message) {
                loghelper.info(`ws received: ${message}`);
            });

            wsclient.send('something');
        });

        wss.on("error", function errorhandler(ws, error) {
            loghelper.error(`ws error:${error}`);
        });

        wss.on("close", (ws, request) => {
            loghelper.error(`ws closed:${request}`);
        });

        return wss;
    } catch (error) {
        loghelper.error(error);
        return null;
    }
}

function closeWS() {
    if (wss) {
        wss.close(err => {
            loghelper.error(`close websocket service error: ${err}`);
        });
    }
}

module.exports = {
    startServer,
    closeWS
};
```

### 3. loghelper.js

```js
const log4js = require('log4js');
log4js.configure({
    appenders: {
        xly: {
            type: "dateFile",
            filename: "./logs/log_date/date",
            alwaysIncludePattern: true,
            pattern: "yyyy-MM-dd.log"
        },
        out: {
            type: 'stdout'
        }
    },
    categories: {
        default: {
            appenders: ["xly"],
            level: "info"
        }
    }
});
const logger = log4js.getLogger("xly");
module.exports = logger;
```

### 4.pass_webdriver.js

```js
var plugins = [
    {
        0: {
            "description": "Portable Document Format",
            "enabledPlugin": {},
            "suffixes": "pdf",
            "type": "application/x-google-chrome-pdf",
        },
        "description": "Portable Document Format",
        "filename": "internal-pdf-viewer",
        "length": 1,
        "name": "Chrome PDF Plugin",
    },
    {
        0: {
            "description": "",
            "enabledPlugin": {},
            "suffixes": "pdf",
            "type": "application/pdf",
        },
        "description": "",
        "filename": "mhjfbmdgcfjbbpaeojofohoefgiehjai",
        "length": 1,
        "name": "Chrome PDF Viewer",
    },
    {
        0: {
            "description": "Native Client Executable",
            "enabledPlugin": {},
            "suffixes": "",
            "type": "application/x-pnacl",
        },
        1: {
            "description": "Portable Native Client Executable",
            "enabledPlugin": {},
            "suffixes": "",
            "type": "application/x-nacl",
        },
        "description": "",
        "filename": "internal-nacl-plugin",
        "length": 2,
        "name": "Native Client",
    }
]


var dd = {
    // 重置window.navigator的属性---> headless:false下。无头模式没有window.chrome
    "webdriver": undefined, //puppeteer控制浏览器时，webdriver会变为true，暴露身份
    "plugins": plugins,
    "languages": ['zh-CN', 'zh', 'en'],
    "language": "zh-CN",
    "platform": "Win32",
};

for (var name in window.navigator) {
    if (name in dd) {
        Object.defineProperty(window.navigator, name, {
            value: dd[name],
        })
    }
}
```

### 5.process.js

```js
const exec = require('child_process').exec;

const isRunning = async query => {
    return new Promise((resolve, reject) => {
        try {
            let platform = process.platform;
            let cmd = '';
            switch (platform) {
                case 'win32':
                    cmd = `tasklist`;
                    break;
                case 'darwin':
                    cmd = `ps -ax | grep ${query}`;
                    break;
                case 'linux':
                    cmd = `ps -A`;
                    break;
                default:
                    break;
            }
            exec(cmd, (err, stdout, stderr) => {
                resolve(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
            });
        } catch (error) {
            reject(error);
        }
    });

}

// await isRunning('chrome.exe');

module.exports = isRunning;
```

### 6.requestInterception.js

```js
const fs = require("fs");
const logger = require("./loghelper");
const path = require("path");
const { type } = require("os");
async function setRequestInterception(page) {
    
    /**
     * async def pass_webdriver(request: Request):
    """
        # 启用拦截器
        await page.setRequestInterception(True)
        page.on("request", use_proxy_base)
    :param request:
    :return:
    """
    # 构造请求并添加代理
    req = {
        "headers": request.headers,
        "data": request.postData,
        "proxy": proxy,  # 使用全局变量 则可随意切换
        "timeout": 5,
        "ssl": False,
    }
    try:
        # 使用第三方库获取响应
        async with aiohttp_session.request(
            method=request.method, url=request.url, **req
        ) as response:
            body = await response.read()
    except Exception as e:
        await request.abort()
        return

    if request.url == "https://www.baidu.com/":
        with open("pass_webdriver.js") as f:
            js = f.read()
        # 在html源码头部添加js代码 修改navigator属性
        body = body.replace(b"<title>", b"<script>%s</script><title>" % js.encode())

    # 数据返回给浏览器
    resp = {"body": body, "headers": response.headers, "status": response.status}
    await request.respond(resp)
    return
     */
    // await page.setRequestInterception(true);
     await page.on("response", (res) => {
        if (res.ok()) {
            // _delDir('dist');
            try {
                // fs.mkdirSync("dist");
                let contentType = res.headers()['content-type'];
                if(contentType==='image/webp'){
                    let time = new Date().getTime();
                    res.buffer().then(data=>{
                        console.log(res.headers);
                        fs.writeFile(`dist/集合${time}.jpeg`, data,err=>{
                            if(err) throw err;
                        });
                     });
                }
            } catch (error) {
                // logger.error(`response error: ${error}`);
                console.error(`response error: ${error}`);
            }
        }
        
    });
}
 function _delDir(p) {
    let files = [];

    if (fs.existsSync(p)) {
        files = fs.readdirSync(p);
        files.forEach((file) => {
            let curPath = path.join(p, file);

            if (fs.statSync(curPath).isDirectory()) {
                //递归删除文件夹
                _delDir(curPath);
            } else {
                //删除文件
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(p);
    }
}
module.exports = {
    setRequestInterception
};

```

### 7.time.js

```js
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}



module.exports = {
    sleep
};
```

## 二.index.js

```js
const puppeteer = require("puppeteer");
const loghelper = require("./helpers/loghelper");
const { startBrowser, getwsEndport } = require("./helpers/browser");
const { sleep } = require("./helpers/time");
const { startServer } = require("./helpers/communication");

const { setRequestInterception } = require("./helpers/requestInterception");
// 全局未处理异常处理。
process.on("uncaughtException", (err) => {
    loghelper.error(err);
});
process.on("uncaughtExceptionMonitor", (err) => {
    loghelper.error(err);
});
process.on("unhandledRejection", (err) => {
    loghelper.error(err);
});
let cdpPort = 7724; // chrome调试协议端口号
let websocketPort = 7648;

if (process.env["wsport"]) {
    try {
        let wsport = Number(process.env["wsport"]); // 如果环境变量中设置了websocket端口号，则使用环境变量中的端口号。
        websocketPort = wsport;
    } catch (error) {
        loghelper.error(`环境变量中指定了websocket端口号，但转换错误。`);
    }
}

if (process.env["cdpport"]) {
    try {
        let tempcdpport = Number(process.env["cdpport"]); // 如果环境变量中设置了CDP端口号，则使用环境变量中的端口号。
        cdpPort = tempcdpport;
    } catch (error) {
        loghelper.error(`环境变量中指定了CDP端口号，但转换错误。`);
    }
}

(async () => {
    await startBrowser(cdpPort);
    await startServer(websocketPort); // 启动WebSocekt服务
    let pbrowser = null;
    let wsendportURL = await getwsEndport(cdpPort);
    pbrowser = await puppeteer.connect({
        browserWSEndpoint: wsendportURL,
        defaultViewport:{
            width:1440,
            height:1080
        }
    });
    let page = await pbrowser.newPage();
    // page.goto("https://www.vcg.com/api/common/searchImage?phrase=%E6%98%A5%E5%A4%A9&graphicalStyle%5B0%5D=1&page=1 ");
    page.goto("https://www.vcg.com/creative/collection/");
    // 关闭淘宝登录弹窗
    /* let dialog = await page.waitForXPath(('/html/body/div[14]/div[2]/div'));
    await dialog.click(); */
    

    await setRequestInterception(page);
})();

```

## 三.package.json

```json
{
  "name": "puppeteer-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "keywords": [
    ""
  ],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "kill-process-by-name": "^1.0.5",
    "log4js": "^6.3.0",
    "puppeteer": "^9.1.1",
    "regedit": "^3.0.3",
    "request": "^2.88.2",
    "ws": "^7.4.6"
  }
}

```

