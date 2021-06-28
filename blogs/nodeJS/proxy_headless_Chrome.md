---
title: 代理无头浏览器身份验证
date: 2021-06-28
tags:
 - puppeteer proxy
categories: 
 - nodeJS
sidebar: auto
---
---

# 一.代理无头浏览器

## 1.参考链接

[How to make headless Chrome and Puppeteer use a proxy server with authentication](https://medium.com/@jancurn/how-to-make-headless-chrome-and-puppeteer-use-a-proxy-server-with-authentication-249a21a79212)

![puppeteer-proxy](../imgs/headless.jpg)

## 2.npm包 proxy-chain

### 2.1 github链接：[ proxy-chain HTTP proxy server for Node.js ]( https://github.com/AlexGodard/proxy-chain/packages/555113 )
npm链接：[proxy-chain](https://www.npmjs.com/package/proxy-chain)

### 2.2 puppeteer 代理Url

> Parses and validates a HTTP proxy URL. If the proxy requires authentication,
> then the function starts an open local proxy server that forwards to the proxy.
> The port is chosen randomly.
>
> The function takes an optional callback that receives the anonymous proxy URL.
> If no callback is supplied, the function returns a promise that resolves to a String with
> anonymous proxy URL or the original URL if it was already anonymous.
>
> The following example shows how you can use a proxy with authentication
> from headless Chrome and [Puppeteer](https://github.com/GoogleChrome/puppeteer).

`anonymizeProxy(proxyUrl, callback)`

```js
const puppeteer = require('puppeteer');
const proxyChain = require('proxy-chain');

(async() => {
    const oldProxyUrl = 'http://bob:password123@proxy.example.com:8000';
    const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

    // Prints something like "http://127.0.0.1:45678"
    console.log(newProxyUrl);

    const browser = await puppeteer.launch({
        args: [`--proxy-server=${newProxyUrl}`],
    });

    // Do your magic here...
    const page = await browser.newPage();
    await page.goto('https://www.example.com');
    await page.screenshot({ path: 'example.png' });
    await browser.close();

    // Clean up
    await proxyChain.closeAnonymizedProxy(newProxyUrl, true);
})();
```

