---
title: Django语法总结
date: 2021-06-21
tags:
 - Django Python
categories: 
 - Python
---
---
## 常用语法

### 1.模板渲染

```django
obj = {"name" :"jack" }
{{name}}  {{name.name}}

{# 我是注释 #}
```



### 2.管道运算符



1. ```django
   {{ 变量名 | 过滤器：可选参数 }}
   // lower first upper
   //truncatewords:"30" 截取前三十个字符显示
   //date    |date:" Y-m-d"
   //length 返回变量长度
   //default 给到默认值，返回false才生效
   //safe  将字符串标记为安全，不用转义
   ```

   

### 3. if/else

```django
{% if condition %}
     ... display
{% endif %}
或者：

{% if condition1 %}
   ... display 1
{% elif condition2 %}
   ... display 2
{% else %}
   ... display 3
{% endif %}

//{% if %} 标签接受 and ， or 或者 not 关键字来对多个变量做判断 ，或者对变量取反（ not )，例如：
```

### 4. for循环

```django
{% for i in views_list %}
{{ i }}
{% endfor %}
{# 语法：（可以嵌套循环）#}
		{% for X,Y in someValue %}
	    {% endfor%}
```

```django
{% empty %}   for循环为空执行后面的文字，单标签
```

### 5. ifequal / ifnotequal 标签



```django
% ifequal %} 标签比较两个值，当他们相等时，显示在 {% ifequal %} 和 {% endifequal %} 之中所有的值。

{# 下面的例子比较两个模板变量 user 和 currentuser : #}
{% ifequal user currentuser %}
    <h1>Welcome!</h1>
{% endifequal %}

{# 和 {% if %} 类似， {% ifequal %} 支持可选的 {% else%} 标签：8 #}
{% ifequal section 'sitenews' %}
    <h1>Site News</h1>
{% else %}
    <h1>No News Here</h1>
{% endifequal %}
```

### 6. include 标签

```django
{% include %} 标签允许在模板中包含其它的模板的内容。
{% include "nav.html" %}
```

### 7. 父子模板继承

```django
{% block 名称 %} 
预留给子模板的区域，可以设置设置默认内容
{% endblock 名称 %}

子模板：
1：{% extends "父模板路径"%}   {# 先定义继承父模板名称#}
2：
{% block 名称 %}
	内容 
{% endblock 名称 %}
{# 此时子模板内的名称字段需要同父模板内定义的名称相同#}
```

### 8. csrf_token

**在模板的末尾，我们增加一个 rlt 记号，为表格处理结果预留位置。**

**表格后面还有一个``{% csrf_token %}``的标签。csrf 全称是 ``Cross Site Request Forgery``。这是Django提供的防止伪装提交请求的功能。POST 方法提交的表格，必须有此标签。**

```django
csrf_token 用于form表单中，作用是跨站请求伪造保护。

如果不用｛% csrf_token %｝标签，在用 form 表单时，要再次跳转页面会报403权限错误。

用了｛% csrf_token %｝标签，在 form 表单提交数据时，才会成功。

 <form action="/search-post/" method="post">
        {% csrf_token %}
        <input type="text" name="q">
        <input type="submit" value="搜索">
    </form>
 <p>{{ rlt }}</p>

```

