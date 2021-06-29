---
title: 路由params传参页面刷新，数据丢失
date: 2021-06-29
sidebar: auto
tags:
 - Vue常见问题
categories: 
 - Vue
---
---
# 解决Vue路由params传参页面刷新，数据丢失问题

> 解决思路是根据sessionStorage暂存，组件卸载时清除数据。

```js
/*
假设params传来detailData参数，当前状态机内有routeParams数组接收
data(){
	return{
		routeParams:[],
		tableData:[]
	}
}
*/

created() {
    do {
        // created判断有params-->存sessionStorage
      if (Object.keys(this.$route.params).length !== 0) {
        sessionStorage.setItem(
          "tableDetailData",
          JSON.stringify(this.$route.params.detailData)
        );
          // 赋值sessionStorage给tableData
        this.routeParams = JSON.parse(sessionStorage.getItem("tableDetailData"));			  
        break;
      }
        // 若sessionStorage存过了，直接取
      if (sessionStorage.getItem("tableDetailData")) {
        this.routeParams = JSON.parse(sessionStorage.getItem("tableDetailData"))
        break;
      }
    } while (0);
    // 深拷贝一下
    this.tableData = JSON.parse(JSON.stringify(this.routeParams));
  },
  destroyed() {
      // 移除sessionStorage
    sessionStorage.removeItem("tableDetailData");
  },
```

