---
title: JavaScript util函数
date: 2021-06-20
tags:
 - JavaScript util函数
categories: 
 - JavaScript
sidebar: auto
---
---

### 1、递归取数组内所有的children的编码

```javascript
getAllChildrenBm(arr) {
  let bmarr = [];
  for (let item of arr) {
    bmarr.push(item.bm);
    if (item.children && item.children.length > 0) {
      // bmbm.push(this.getBmmb(item.children))
      bmarr = [...bmarr, ...this.getAllChildrenBm(item.children)];
    }
  }
  return bmarr;
},
```

### 2、对象过滤出想要的键值对 工具函数

```javascript
filterObj (obj, arr) {
  if (typeof (obj) !== 'object' || !Array.isArray(arr)) {
    throw new Error('参数格式不正确')
  }
  const result = {}
  Object.keys(obj).filter((key) => arr.includes(key)).forEach((key) => {
    result[key] = obj[key]
  })
  return result
},



// how to use :this.filterObj(原始obj，[想要的键组成的数组])
```

### 3、数组 手动去重 



```javascript
quickSearch (jcrysf_dm) {

  let person = this.personData.filter(cur => {
    return cur.jcrysf_dm == jcrysf_dm
  })

  let arr = [...this.tableData,...person]
  let obj= {};
  let newArr = []
  for(let item of arr){
//去重
    if(!obj[item.rybm]){
      newArr.push(item)
      obj[item.rybm] = item.rybm
    }
  }
  this.tableData = JSON.parse(JSON.stringify(newArr))
}
```
### 4、递归树
```js
    setTree(arr, bm, pid, id) {
      const newArr = [];
      for (const item of arr) {
        if (item[pid] === bm) {
          item.children = this.setTree(arr, item[id], pid, id);
          newArr.push(item);
        }
      }
      return newArr;
    },
        
     // use:  this.zzjgList = this.setTree(res.data, null, "PNodeId", "NodeId");
```

