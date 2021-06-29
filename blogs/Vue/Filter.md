---
title: Vue常用过滤器，index.js
date: 2021-06-29
sidebar: auto
tags:
 - Vue常用过滤器
categories: 
 - Vue
---
---
# Vue常用过滤器



```js
// 全局过滤器-时间戳转换
/*
<span>{{ someTimeStamp | timestamp2datetime }}</span>
*/
Vue.filter('timestamp2datetime', function (timestamp) {
    if (!timestamp) {
        return '-';
    } else {
        try {
            const year = new Date(timestamp).getFullYear();
            const month = ("0" + (new Date(timestamp).getMonth() + 1)).slice(-2);
            const day = ("0" + new Date(timestamp).getDate()).slice(-2);
            const hour = ("0" + new Date(timestamp).getHours()).slice(-2);
            const minutes = ("0" + new Date(timestamp).getMinutes()).slice(-2);
            const seconds = ("0" + new Date(timestamp).getSeconds()).slice(-2);
            return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
        } catch (error) {
            throw error;
        }
    }
})

Vue.filter('titleRange', function (str) {
    if (!str) {
        return ""
    } else {
        if (str.length <= 30) {
            return str
        } else {
            return str.slice(0, 27).concat('...')
        }
    }
})

// 文件大小格式化
/*
<span>{{ someSize | sizeChange }}</span>
*/
Vue.filter('sizeChange', function (limit) {
    if (!limit) {
        return 0;
    } else {
        let size = "";
        if (limit < 0.1 * 1024) {
            size = limit.toFixed(2) + "B";
        } else if (limit < 0.1 * 1024 * 1024) {
            size = (limit / 1024).toFixed(2) + "KB";
        } else if (limit < 0.1 * 1024 * 1024 * 1024) {
            size = (limit / (1024 * 1024)).toFixed(2) + "MB";
        } else {
            size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
        }

        let sizeStr = size + "";
        let index = sizeStr.indexOf(".");
        let dou = sizeStr.substr(index + 1, 2);
        if (dou == "00") {
            return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);
        }
        return size;
    }
})
```