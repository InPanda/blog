---
title: puppeteer
date: 2021-06-22
tags:
 - puppeteer
categories: 
 - nodeJS
sidebar: auto
---
---

## puppeteer 关键API
### 一、init
```javascript
const puppeteer = require('puppeteer');
const brower = puppeteer.lunch();
const page = brower.newPage();
// some code here...
brower.close();//释放内存
```

### 二、page

#### 1.setRequestInterception(value)

启用请求拦截器，会激活 `request.abort`, `request.continue` 和 `request.respond` 方法。这提供了修改页面发出的网络请求的功能。

```javascript
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', interceptedRequest => {
    if (interceptedRequest.url().endsWith('.png') || interceptedRequest.url().endsWith('.jpg'))
      interceptedRequest.abort();
    else
      interceptedRequest.continue();
  });
  await page.goto('https://example.com');
  await browser.close();
});
```

#### 2.focus（selector）

要给焦点的元素的选择器[selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)。如果有多个匹配的元素，焦点给第一个元素。

#### 3.page.hover(selector)

要hover的元素的选择器。如果有多个匹配的元素，hover第一个。

# WFS已有项目puppeteer逻辑整理

一、文件目录

--Server

​			|

​			|--Common.js    一些工具函数，引入了DisableBrowerAudioAutoPlay.js，重写										 puppeteer的goto方 法，基础上加了禁用视频自动播放代码逻辑

​			|--DisableBrowerAudioAutoPlay.js	禁用视频自动播放

​			|--puppeteerBrowserHelper.js 初始化浏览器

​			|--PuppeteerExt.js 通过IP和端口号获取浏览器调试协议URL地址

​			

--AutomatedScript 自动化识别脚本

​	|--ActionRecordBrowserJs.js 注册事件，点击事件，页面切换事件，滚动事件，下一页点														击事件**invokeNodejsCallBackFunc**

	AutomatedScript  自动化识别脚本
├── ActionRecordBrowserJs.js 注册事件，点击事件，页面切换事件，滚动事件，下一页点														击事件**invokeNodejsCallBackFunc**
├── area.js
├── AutomatedScriptRecord.js
├── AutoScriptBuild.js
├── DataCapture.js
├── DataCaptureServe.js
├── DataPreview.js
├── DrawBox.js
├── element.js
├── ExecuteConfig.js
├── node.js
├── RootTargetModel.js
├── ScriptPlayer.js
├── template.js
└── tree.js