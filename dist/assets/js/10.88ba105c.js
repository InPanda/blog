(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{505:function(s,t,a){s.exports=a.p+"assets/img/cd.e22ba9ce.png"},506:function(s,t,a){s.exports=a.p+"assets/img/cd2.4faa697c.png"},523:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("hr"),s._v(" "),n("h1",{attrs:{id:"xpath"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xpath"}},[s._v("#")]),s._v(" Xpath")]),s._v(" "),n("p",[n("strong",[s._v("火狐，谷歌浏览器调试可在console栏输入"),n("code",[s._v('$x("some xpath function here")')]),s._v("进行xpath元素查找")])]),s._v(" "),n("h2",{attrs:{id:"_1-xpath中绝对路径和相对路径的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-xpath中绝对路径和相对路径的区别"}},[s._v("#")]),s._v(" 1.Xpath中绝对路径和相对路径的区别")]),s._v(" "),n("h3",{attrs:{id:"_1-1、如果元素的-id-不唯一-或者是动态的-或者-name-以及-linktext-属性值也不唯一-对于这样的元素-我们就需要考虑用-xpath-来查找元素了-然后再对元素执行操作。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、如果元素的-id-不唯一-或者是动态的-或者-name-以及-linktext-属性值也不唯一-对于这样的元素-我们就需要考虑用-xpath-来查找元素了-然后再对元素执行操作。"}},[s._v("#")]),s._v(" 1.1、如果元素的 ID 不唯一，或者是动态的，或者 name 以及 linktext 属性值也不唯一， 对于这样的元素，我们就需要考虑用 xpath 来查找元素了，然后再对元素执行操作。")]),s._v(" "),n("h3",{attrs:{id:"_1-2、不管用什么方式查找元素-id、name、xpath、css-都需要在页面上查找到唯一的元素。-都应该只找到一个匹配的-node-节点-除非想要查找一批元素放集合里-然后来操作集合。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、不管用什么方式查找元素-id、name、xpath、css-都需要在页面上查找到唯一的元素。-都应该只找到一个匹配的-node-节点-除非想要查找一批元素放集合里-然后来操作集合。"}},[s._v("#")]),s._v(" 1.2、不管用什么方式查找元素，id、Name、Xpath、css—>都需要在页面上查找到唯一的元素。 都应该只找到一个匹配的 node（节点），除非想要查找一批元素放集合里，然后来操作集合。")]),s._v(" "),n("h3",{attrs:{id:"_1-3、单右斜线-和双右斜线-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、单右斜线-和双右斜线-的区别"}},[s._v("#")]),s._v(" 1.3、单右斜线“/”和双右斜线“//”的区别:")]),s._v(" "),n("p",[s._v("单右斜线“/”,在 XPATH 里面任何地方的单右斜代表要查找的元素是挨着上一级节点的子节点中的一个，中间不能跳级。")]),s._v(" "),n("p",[s._v("双右斜线“//”，代表查找下级任何子节点或者任何嵌套子节点中的一个，可以跳级。（模糊查询）")]),s._v(" "),n("h3",{attrs:{id:"_1-4、语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、语法"}},[s._v("#")]),s._v(" 1.4、语法")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@attribute"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查找下级任何子节点")]),s._v("\n\ntag：标签\n\nattribute：属性\n\nvaluse：属性值\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_2-xpath匹配含有指定文本的标签-contains的用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-xpath匹配含有指定文本的标签-contains的用法"}},[s._v("#")]),s._v(" 2.XPath匹配含有指定文本的标签——"),n("strong",[s._v("contains")]),s._v("的用法")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("starts-with(@someArr,'value')")]),s._v(":顾名思义，匹配一个属性开始位置的关键字")]),s._v(" "),n("li",[n("code",[s._v("text（）")]),s._v(" 匹配的是显示文本信息")])]),s._v(" "),n("h3",{attrs:{id:"_2-1-实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-实例"}},[s._v("#")]),s._v(" 2.1 实例")]),s._v(" "),n("p",[s._v("例：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("@name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'na'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查找name属性中包含na关键字的页面元素")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("xpath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'//div[contains(@class,"a") and contains(@class,"b")]\'')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//它会取class含有a和b的元素 a && b")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("xpath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'//div[contains(@class,"a") or contains(@class,"b")]\'')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//它会取class 含有 a 或者 b满足时，或者同时满足时的元素 a | b | (a && b)")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"_2-2-标签中只包含文字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-标签中只包含文字"}},[s._v("#")]),s._v(" 2.2 标签中只包含文字")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("side-menu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("active"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("#"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      卷期号：\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("取包含 '卷期号' 三个字的节点")]),s._v(" "),n("div",{staticClass:"language-code line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//ul[@id='side-menu']/li/a[contains(text(),\"卷期号\")]`\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("取其内容")]),s._v(" "),n("div",{staticClass:"language-code line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//ul[@id='side-menu']/li/a[contains(text(), '卷期号')]/text()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2-3-文字没有被一个明确的标签包裹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-文字没有被一个明确的标签包裹"}},[s._v("#")]),s._v(" 2.3 文字没有被一个明确的标签包裹")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("side-menu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("active"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("#"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("DOI"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        卷期号：\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("xxxx"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("strong",[s._v("再用上边的xpath表达式就到不到了, 不过可以借助string()， 将a标签里边的东西全部转换成字符串, 再用contains判断")])]),s._v(" "),n("div",{staticClass:"language-code line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//ul[@id='side-menu']/li/a[contains(string(), '卷期号')]/text()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_3-xpath定位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-xpath定位"}},[s._v("#")]),s._v(" 3. Xpath定位")]),s._v(" "),n("h3",{attrs:{id:"_3-1-常规属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-常规属性"}},[s._v("#")]),s._v(" 3.1 常规属性")]),s._v(" "),n("ol",[n("li",[s._v("id定位")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"//*[@id='kw']\"")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// *匹配所有元素")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("tag（标签）定位")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"//input[@id='kw']\"")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//id为kw的input框")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("class定位")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"//input[@class='s_ipt']\"")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//class为s_ipt的input框")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("name定位")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"//input[@name='wd']\"")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("其他属性")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"//input[@autocomplete='off']\"")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//autocomplete属性为off的input")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_4-table定位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-table定位"}},[s._v("#")]),s._v(" 4.Table定位")]),s._v(" "),n("h3",{attrs:{id:"_4-1-定位表格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-定位表格"}},[s._v("#")]),s._v(" 4.1 定位表格")]),s._v(" "),n("p",[n("img",{attrs:{src:a(505),alt:"禅道表格"}})]),s._v(" "),n("p",[s._v("Table表格固定格式："),n("code",[s._v(".//*[@id=‘表格id’]/tbody/tr[行数]/td[列数]/a")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\".//*[@id='bugList']/tbody/tr[6]/td[4]/a\"")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_4-2-参数化行和列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-参数化行和列"}},[s._v("#")]),s._v(" 4.2 参数化行和列")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\ntable "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v(".//*[@id='bugList']/tbody/tr[")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("]/td[")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("]/a")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("em",[s._v("puppeteer")]),s._v(":")]),s._v(" "),n("p",[n("code",[s._v("page.xpath( table )")])]),s._v(" "),n("h3",{attrs:{id:"_4-3-根据表格标题定位后面的按钮"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-根据表格标题定位后面的按钮"}},[s._v("#")]),s._v(" 4.3 根据表格标题定位后面的按钮")]),s._v(" "),n("p",[n("img",{attrs:{src:a(506),alt:"禅道表格"}})]),s._v(" "),n("ol",[n("li",[s._v("先通过bug的标题名称找到这一行")]),s._v(" "),n("li",[s._v("再找到这一行的父节点")]),s._v(" "),n("li",[s._v("通过父节点往下搜（编辑按钮都是固定位置）")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" text "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"上传多个附件"')]),s._v("\nxpath "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('.//*[text()="')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"]/../../td[@class="text-right"]/a[@title="编辑"]')]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);