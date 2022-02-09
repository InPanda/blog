---
title: JavaScript 手写题
date: 2022-02-09
tags:
    - JavaScript手写题
categories:
    - JavaScript
sidebar: auto
---

---

# JS 手写题

## 基础篇

### 1.模拟 instanceOf

```js
/**
 *
 * @param {*} obj 实例对象
 * @param {*} func 构造函数
 * @returns true false
 */
const instanceOf1 = (obj, func) => {
    if (!(obj && ['object', 'function'].includes(typeof obj))) {
        return false;
    }

    let proto = Object.getPrototypeOf(obj);

    if (proto === func.prototype) {
        return true;
    } else if (proto === null) {
        return false;
    } else {
        return instanceOf1(proto, func);
    }
};
/**
 *
 * @param {*} obj 实例对象
 * @param {*} func 构造函数
 * @returns true false
 */
const instanceOf2 = (obj, func) => {
    if (!(obj && ['object', 'function'].includes(typeof obj))) {
        return false;
    }

    let proto = obj;

    while ((proto = Object.getPrototypeOf(proto))) {
        if (proto === null) {
            return false;
        } else if (proto === func.prototype) {
            return true;
        }
    }

    return false;

    // while (true) {
    //   if (proto === null) {
    //     return false
    //   } else if (proto === func.prototype) {
    //     return true
    //   } else {
    //     proto = Object.getPrototypeOf(proto)
    //   }
    // }
};

let Fn = function() {};
let p1 = new Fn();

console.log(instanceOf1({}, Object));
console.log(instanceOf1(p1, Fn));
console.log(instanceOf1({}, Fn));
console.log(instanceOf1(null, Fn));
console.log(instanceOf1(1, Fn));
console.log(instanceOf1(function a() {}, Function));

console.log(11111111);

console.log(instanceOf2({}, Object));
console.log(instanceOf2(p1, Fn));
console.log(instanceOf2({}, Fn));
console.log(instanceOf2(null, Fn));
console.log(instanceOf2(1, Fn));
console.log(instanceOf1(function a() {}, Function));
```

### 2.多维数组拍平

```js
/**
 *
 * @param {*} array 深层嵌套的数据
 * @returns array 新数组
 */
const flat1 = (array) => {
    return array.reduce((result, it) => {
        return result.concat(Array.isArray(it) ? flat1(it) : it);
    }, []);
};

let arr1 = [1, [2, 3, 4], [5, [6, [7, [8]]]]];
console.log(flat1(arr1));

// js原生的flat方法
/**
 *
 * @param {*} array 深层嵌套的数据
 * @returns 新数组
 */
const flat2 = (array) => {
    return array.flat(Infinity);
};

let arr2 = [1, [2, 3, 4], [5, [6, [7, [8]]]]];

console.log(flat2(arr2));

const flat3 = (array) => {
    const result = [];
    const stack = [...array];

    while (stack.length !== 0) {
        const val = stack.pop();
        if (Array.isArray(val)) {
            stack.push(...val);
        } else {
            result.unshift(val);
        }
    }
    return result;
};

let arr3 = [1, [2, 3, 4], [5, [6, [7, [8]]]]];

console.log(flat3(arr3));
```

### 3. setTimeout 模拟 setInterval

```js
const simulateSetInterval = (func, timeout) => {
    let timer = null;
    const interval = () => {
        timer = setTimeout(() => {
            func();
            interval();
        }, timeout);
    };

    interval();

    return () => clearTimeout(timer);
};

const cancel = simulateSetInterval(() => {
    console.log(1);
}, 300);

setTimeout(() => {
    cancel();
}, 1000);
```

### 4.setInterval 模拟 setTimeout

```js
const simulateSetTimeout = (fn, timeout) => {
    let timer = null;

    timer = setInterval(() => {
        clearInterval(timer);
        fn();
    }, timeout);

    return () => clearInterval(timer);
};

const cancel = simulateSetTimeout(() => {
    console.log(1);
}, 1000);

setTimeout(() => {
    cancel();
}, 1100);
```

### 5.手写 call

```js
/**
 *
 * @param {*} ctx 函数执行上下文this
 * @param  {...any} args 参数列表
 * @returns 函数执行的结果
 */
Function.prototype.myCall = function(ctx, ...args) {
    if (!ctx) {
        ctx = typeof window !== 'undefined' ? window : global;
    }
    // 暴露处理 ctx有可能传非对象
    ctx = Object(ctx);

    const fnName = Symbol('key');

    ctx[fnName] = this;

    const result = ctx[fnName](...args);

    delete ctx[fnName];

    return result;
};

let fn = function(name, sex) {
    console.log(this, name, sex);
};

fn.myCall('', '撒不拉', 'boy'), fn.myCall({ name: '哈哈哈', sex: 'boy' }, '阿giao', 'boy');
```

### 6. 手写 apply

```js
/**
 *
 * @param {*} ctx 函数执行上下文this
 * @param {*} args  参数列表
 * @returns 函数执行的结果
 */
Function.prototype.myApply = function(ctx, args) {
    if (!ctx) {
        ctx = typeof window !== 'undefined' ? window : global;
    }
    // 暴露处理 ctx有可能传非对象
    ctx = Object(ctx);

    const fnName = Symbol();

    ctx[fnName] = this;

    const result = ctx[fnName](...args);

    delete ctx[fnName];

    return result;
};

let fn = function(name, sex) {
    console.log(this, name, sex);
};

fn.myApply('', ['乌苏', 'boy']);
fn.myApply({ name: '乌苏', sex: 'boy' }, ['乌苏', 'boy']);
```

### 7.数组去重

```js
// 1. 最简短方便的方式
const uniqueArray1 = (array) => {
    return [...new Set(array)];
};

// 2. indexOf去重
const uniqueArray2 = (array) => {
    let result = [];

    array.forEach((it, i) => {
        if (result.indexOf(it) === -1) {
            result.push(it);
        }
    });

    return result;
};

// 3. filter配合indexOf
const uniqueArray3 = (array) => {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    //不是那么就证明是重复项，就舍弃
    return array.filter((it, i) => array.indexOf(it) === i);
};

// 4. Array.from去重
const uniqueArray4 = (array) => {
    return Array.from(new Set(array));
};

//5.双重for和splice
function uniqueArray5(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                //第一个等同于第二个，splice方法删除第二个
                arr.splice(j, 1);
                // 删除后注意回调j
                j--;
            }
        }
    }
    return arr;
}

//6. reduce配合includes
function uniqueArray6(arr) {
    let uniqueArr = arr.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur);
        }
        return acc;
    }, []); // []作为回调函数的第一个参数的初始值
    return uniqueArr;
}
let testArray = [1, 2, 3, 1, 2, 3, 4];

console.log(uniqueArray1(testArray));
console.log(uniqueArray2(testArray));
console.log(uniqueArray3(testArray));
console.log(uniqueArray4(testArray));
console.log(uniqueArray5(testArray));
console.log(uniqueArray6(testArray));
```

### 8.手写 Promise.all

```js
function PromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new TypeError('promises must be an array');
        }
        let result = [];
        let count = 0;
        promises.forEach((promise, index) => {
            promise.then(
                (res) => {
                    result[index] = res;
                    count++;
                    count === promises.length && resolve(result);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    });
}
```

### 9.手写 Promise.finally

```js
Promise.prototype.finally = function(cb) {
    return this.then(
        function(value) {
            return Promise.resolve(cb()).then(function() {
                return value;
            });
        },
        function(err) {
            return Promise.resolve(cb()).then(function() {
                throw err;
            });
        }
    );
};
```

### 10.手写 Promise.race

```js
Promise.race = function(promiseArr) {
    return new Promise((resolve, reject) => {
        promiseArr.forEach((p) => {
            Promise.resolve(p).then(
                (val) => {
                    resolve(val);
                },
                (err) => {
                    rejecte(err);
                }
            );
        });
    });
};
```

### 11.手写 new

```js
function createObject(Con) {
    // 创建新对象obj
    // var obj = {};也可以
    var obj = Object.create(null);

    // 将obj.__proto__ -> 构造函数原型
    // (不推荐)obj.__proto__ = Con.prototype
    Object.setPrototypeOf(obj, Con.prototype);

    // 执行构造函数，并接受构造函数返回值
    const ret = Con.apply(obj, [].slice.call(arguments, 1));

    // 若构造函数返回值为对象，直接返回该对象
    // 否则返回obj
    return typeof ret === 'object' ? ret : obj;
}
```

### 12.实现数据类型判断函数

```js
function myTypeof(obj) {
    return Object.prototype.toString
        .call(obj)
        .slice(8, -1)
        .toLowerCase();
}
```

### 13.实现 sleep 函数

```js
// promise
const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};
sleep(1000).then(() => {
    console.log(1);
});
// ES5
function sleep(callback, time) {
    if (typeof callback === 'function') setTimeout(callback, time);
}

function output() {
    console.log(1);
}
sleep(output, 1000);
```

### 14.防抖 debounce

```js
// 防抖：可以和你的电脑设定了10分钟睡眠时间的场景结合起来理解
// 如果你一直在用电脑，那么电脑就不会睡眠（频繁的把前一个定时器关掉，开启新的定时器）
// 当你最后一次没操作电脑10分钟之后，电脑陷入睡眠
const debounce = function(func, delay) {
    let timer = null;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="text" id="input" />
        <script>
            const $input = document.querySelector('#input');
            // 防抖：可以和你的电脑设定了10分钟睡眠时间的场景结合起来理解
            // 如果你一直在用电脑，那么电脑就不会睡眠（频繁的把前一个定时器关掉，开启新的定时器）
            // 当你最后一次没操作电脑10分钟之后，电脑陷入睡眠
            const debounce = function(func, delay) {
                let timer = null;

                return function(...args) {
                    clearTimeout(timer);

                    timer = setTimeout(() => {
                        func.apply(this, args);
                    }, delay);
                };
            };

            const showName = debounce(function(name) {
                console.log($input.value, this, name);
            }, 500);

            $input.addEventListener('input', (e) => {
                showName.call({ name: '乌苏' }, '乌苏');
            });
        </script>
    </body>
</html>
```

### 15.节流 throttle

```js
// 基于时间戳
const throttle = function(func, delay) {
    let startTime = Date.now();

    return function(...args) {
        let lastTime = Date.now();

        if (lastTime - startTime > delay) {
            func.apply(this, args);
            startTime = Date.now();
        }
    };
};

//方式二
const throttle2 = function(func, delay) {
    let timer = null;

    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, delay);
        }
    };
};

let t1 = Date.now();

const showName = throttle2(function(name) {
    const t2 = Date.now();
    console.log(this, name, t2 - t1);
    t1 = Date.now();
}, 1000);

setInterval(() => {
    showName.call({ name: '乌苏' }, '乌苏');
}, 10);
```

### 16.树 2 数组、数组 2 树

**tree2list**

```js
/**
 * [
  {
    "id": 1,
    "name": "部门1",
    "pid": 0,
    "children": [
      {
        "id": 2,
        "name": "部门2",
        "pid": 1,
        "children": []
      },
      {
        "id": 3,
        "name": "部门3",
        "pid": 1,
        "children": [
          {
            "id": 4,
            "name": "部门4",
            "pid": 3,
            "children": [
              {
                "id": 5,
                "name": "部门5",
                "pid": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]
=>
[
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]
 * 
 */

const tree2list = (tree) => {
    let list = [];
    let queue = [...tree];

    while (queue.length) {
        // 从前面开始取出节点
        const node = queue.shift();
        const children = node.children;

        if (children.length) {
            queue.push(...children);
        }
        // 删除多余的children树形
        delete node.children;

        list.push(node);
    }

    return list;
};

const data = [
    {
        'id': 1,
        'name': '部门1',
        'pid': 0,
        'children': [
            {
                'id': 2,
                'name': '部门2',
                'pid': 1,
                'children': [],
            },
            {
                'id': 3,
                'name': '部门3',
                'pid': 1,
                'children': [
                    {
                        'id': 4,
                        'name': '部门4',
                        'pid': 3,
                        'children': [
                            {
                                'id': 5,
                                'name': '部门5',
                                'pid': 4,
                                'children': [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

console.log(tree2list(data));
```

**list2tree**

```js
/**
 * let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]

  =>

  [
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
  ]
 * 
 * 
 */
// 非递归版本
const arrayToTree = (array) => {
    const hashMap = {};
    let result = [];

    array.forEach((it) => {
        const { id, pid } = it;

        // 不存在时，先声明children树形
        // 这一步也有可能在下面出现
        if (!hashMap[id]) {
            hashMap[id] = {
                children: [],
            };
        }

        hashMap[id] = {
            ...it,
            children: hashMap[id].children,
        };
        // 处理当前的item
        const treeIt = hashMap[id];

        // 根节点，直接push
        if (pid === 0) {
            result.push(treeIt);
        } else {
            // 也有可能当前节点的父父节点还没有加入hashMap，所以需要单独处理一下
            if (!hashMap[pid]) {
                hashMap[pid] = {
                    children: [],
                };
            }
            // 非根节点的话，找到父节点，把自己塞到父节点的children中即可
            hashMap[pid].children.push(treeIt);
        }
    });

    return result;
};

const data = [
    // 注意这里，专门把pid为1的元素放一个在前面
    { id: 2, name: '部门2', pid: 1 },
    { id: 1, name: '部门1', pid: 0 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 7, name: '部门7', pid: 6 },
];

console.log(JSON.stringify(arrayToTree(data), null, 2));
```

### 完整的深拷贝

```js
const getType = (obj) => Object.prototype.toString.call(obj);

const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

const canTraverse = {
    '[object Map]': true,
    '[object Set]': true,
    '[object Array]': true,
    '[object Object]': true,
    '[object Arguments]': true,
};
const mapTag = '[object Map]';
const setTag = '[object Set]';
const boolTag = '[object Boolean]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const handleRegExp = (target) => {
    const { source, flags } = target;
    return new target.constructor(source, flags);
};

const handleFunc = (func) => {
    // 箭头函数直接返回自身
    if (!func.prototype) return func;
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    // 分别匹配 函数参数 和 函数体
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (!body) return null;
    if (param) {
        const paramArr = param[0].split(',');
        return new Function(...paramArr, body[0]);
    } else {
        return new Function(body[0]);
    }
};

const handleNotTraverse = (target, tag) => {
    const Ctor = target.constructor;
    switch (tag) {
        case boolTag:
            return new Object(Boolean.prototype.valueOf.call(target));
        case numberTag:
            return new Object(Number.prototype.valueOf.call(target));
        case stringTag:
            return new Object(String.prototype.valueOf.call(target));
        case symbolTag:
            return new Object(Symbol.prototype.valueOf.call(target));
        case errorTag:
        case dateTag:
            return new Ctor(target);
        case regexpTag:
            return handleRegExp(target);
        case funcTag:
            return handleFunc(target);
        default:
            return new Ctor(target);
    }
};

const deepClone = (target, map = new WeakMap()) => {
    if (!isObject(target)) return target;
    let type = getType(target);
    let cloneTarget;
    if (!canTraverse[type]) {
        // 处理不能遍历的对象
        return handleNotTraverse(target, type);
    } else {
        // 这波操作相当关键，可以保证对象的原型不丢失！
        let ctor = target.constructor;
        cloneTarget = new ctor();
    }

    if (map.get(target)) return target;
    map.set(target, true);

    if (type === mapTag) {
        //处理Map
        target.forEach((item, key) => {
            cloneTarget.set(deepClone(key, map), deepClone(item, map));
        });
    }

    if (type === setTag) {
        //处理Set
        target.forEach((item) => {
            cloneTarget.add(deepClone(item, map));
        });
    }

    // 处理数组和对象
    for (let prop in target) {
        if (target.hasOwnProperty(prop)) {
            cloneTarget[prop] = deepClone(target[prop], map);
        }
    }
    return cloneTarget;
};
```

### 发布订阅模式

```js
class EventEmitter {
    constructor() {
        this.cache = {};
    }
    on(name, fn) {
        if (this.cache[name]) {
            this.cache[name].push(fn);
        } else {
            this.cache[name] = [fn];
        }
    }
    off(name, fn) {
        let tasks = this.cache[name];
        if (tasks) {
            const index = tasks.findIndex((f) => f === fn || f.callback === fn);
            if (index >= 0) {
                tasks.splice(index, 1);
            }
        }
    }
    emit(name, once = false, ...args) {
        if (this.cache[name]) {
            // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
            let tasks = this.cache[name].slice();
            for (let fn of tasks) {
                fn(...args);
            }
            if (once) {
                delete this.cache[name];
            }
        }
    }
}
```

## 排序

### 1.插入排序

```js
// 插入排序
/**
 * 记住你是怎么打牌的就知道插入排序怎么实现了
 * 1. 首先有一个有序的序列，可以认为第一个元素就是已排序的序列
 * 2. 从未排序序列中取一个元素出来，往有序序列中找到合适的位置，如果该位置比元素大，则后移动, 否则继续往前找
 */

const insertSort = (array) => {
    for (let i = 1, length = array.length; i < length; i++) {
        let j = i - 1;
        const curValue = array[i];

        while (j >= 0 && array[j] > curValue) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = curValue;
    }

    return array;
};

console.log(insertSort([-1, 10, 10, 2]));
```

### 2.快速排序

```js
const quickSort = (array) => {
    const length = array.length;
    if (length <= 1) {
        return array;
    }

    const midIndex = Math.floor(length / 2);
    const midValue = array.splice(midIndex, 1)[0];
    let leftArray = [];
    let rightArray = [];
    let index = 0;

    while (index < length - 1) {
        const curValue = array[index];

        if (curValue <= midValue) {
            leftArray.push(curValue);
        } else {
            rightArray.push(curValue);
        }

        index++;
    }

    return quickSort(leftArray).concat([midValue], quickSort(rightArray));
};

const arr = [-10, 10, 1, 34, 5, 1];

console.log(quickSort(arr));
```

### 3.选择排序

```js
/**
 * 1. 取出未排序的第一个元素，遍历该元素之后的部分并进行比较。第一次就是取第一个元素
 * 2. 如果有更小的就交换位置
 */

const swap = (array, a, b) => ([array[b], array[a]] = [array[a], array[b]]);

const selectSort = (array) => {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }

    return array;
};

console.log(selectSort([-1, 10, 10, 2]));
```

### 4.冒泡排序

```js
/**
 * 1. 从第一个元素开始，比较相邻的两个元素，前者大就交换位置
 * 2. 每次遍历结束，都能找到一个最大值
 * 3. 如果还有没排序的元素继续1
 *
 */
const swap = (array, a, b) => ([array[b], array[a]] = [array[a], array[b]]);
const bubbleSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }

    return array;
};

console.log(bubbleSort([-1, 10, 10, 2]));
```
