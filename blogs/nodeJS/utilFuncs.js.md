---
title: Node.js工具函数 
date: 2021-10-23
tags:
 - Node.js 
categories: 
 - Node.js
sidebar: auto
---
---
# Node.js工具函数 
```js
const fs = require('fs');

const path = require('path');



*/***

 ** 对象深拷贝*

 *** *@**param* *{\*}* *data* *被拷贝的对象*

 *** *@**returns* *{Object}* *o 拷贝结果*

 **/*

function deepClone(data) {

  const t = Array.isArray(data) ? 'array' : typeof data;

  let o;

  if (t === "array") {

​    o = [];

  } else if (t === "object") {

​    o = {};

  } else {

​    return data;

  }

  if (t === "array") {

​    for (let i = 0; i < data.length; i++) {

​      o.push(deepClone(data[i]));

​    }

  } else if (t === "object") {

​    for (let i in data) {

​      o[i] = deepClone(data[i]);

​    }

  }

  return o;

}



*/***

 ** 休眠指定毫秒*

 *** *@**param* *{Number}* *ms* *毫秒*

 *** *@**returns* 

 **/*

function sleep(ms) {

  return new Promise((resolve, reject) => {

​    setTimeout(resolve, ms);

  });

}



*/***

 ** 获取包含边界值的随机数*

 *** *@**param* *{Number}* *min* *最小值*

 *** *@**param* *{Number}* *max* *最大值*

 *** *@**returns* *包含边界值的区间内的随机数*

 **/*

function getRandomIntInclusive(min, max) {

  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min; *//含最大值，含最小值* 

}



*/***

 ** 递归创建多级文件夹*

 *** *@**param* *{\*}* *filepath* *文件路径*

 **/*

function createDirSync(filepath) {

  if (fs.existsSync(filepath)) {

​    return true;

  } else {

​    if (createDirSync(path.dirname(filepath))) {

​      fs.mkdirSync(filepath);

​      return true;

​    }

  }

}



*/***

 ** 随机生成UUID*

 *** *@**param* *{Number}* *len* *长度*

 *** *@**param* *{Number}* *radix* *基数*

 *** *@**returns* *uuid*

 **/*

function generateUUID(len = 32, radix = 58) {

  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

  let uuid = [], i;

  radix = radix || chars.length;



  if (len) {

​    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];

  } else {

​    let r;

​    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';

​    uuid[14] = '4';

​    for (i = 0; i < 36; i++) {

​      if (!uuid[i]) {

​        r = 0 | Math.random() * 16;

​        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];

​      }

​    }

  }

  return uuid.join('');

}



*/***

 ** 字符转Unicode编码*

 *** *@**param* *{\*}* *str* 

 *** *@**returns* 

 **/*

function charToUnicode(str) {

  str = String(str)

  let temp;

  let i = 0;

  let r = '';

  for (let val of str) {

​    temp = val.codePointAt(0).toString(16);



​    while (temp.length < 4)

​      temp = '0' + temp;



​    r += '\\0' + temp;

  };

  return r;

}



*/***

 ** 选择器转换为符合规范的格式*

 *** *@**param* *{String}* *selector* *选择器*

 *** *@**returns* *转换后的选择器*

 **/*

function selectorTransform(selector) {

  const reg = /(\.\d)|(#\d)/g;

  if (!selector.match(reg)) selector;

  let specialStrs = selector.match(reg);

  let res = selector;

  for (let i in specialStrs) {

​    const str = specialStrs[i];

​    const type = str[0];

​    const unicode = charToUnicode(str[1]);

​    const temp = type + unicode;

​    res = selector.replace(str, temp);

  }

  return res;

}



*/***

 ** 时间戳转换为时间*

 *** *@**param* *{String}* *timestamp* *时间戳*

 **/*

function timestamp2Datetime(timestamp) {

  if (!timestamp) {

​    return '';

  } else {

​    try {

​      const year = new Date(timestamp).getFullYear();

​      const month = ("0" + (new Date(timestamp).getMonth() + 1)).slice(-2);

​      const day = ("0" + new Date(timestamp).getDate()).slice(-2);

​      const hour = ("0" + new Date(timestamp).getHours()).slice(-2);

​      const minutes = ("0" + new Date(timestamp).getMinutes()).slice(-2);

​      const seconds = ("0" + new Date(timestamp).getSeconds()).slice(-2);

​      return `${year}${month}${day}${hour}${minutes}${seconds}`

​    } catch (error) {

​      throw error;

​    }

  }

}



module.exports = {

  deepClone,

  sleep,

  getRandomIntInclusive,

  createDirSync,

  generateUUID,

  selectorTransform,

  timestamp2Datetime

};
```

