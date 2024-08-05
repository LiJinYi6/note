# 定义
## 1：也是异步编程的一种解决方案，promise创建后里面的函数会立即执行。  
## 2： promise主要是用来解决回调地狱的问题，通过使用.then来使得代码成链式调用，方便维护和使用。.then中的回调函数属于异步任务中的微任务  
## 3：Promise有三个状态  
①：pedding：初始状态  
②：fulfilled:成功状态  
在执行了resolve后，promise则会从pedding变成fulfilled，后续会进入.then 的回调函数中，在回调函数的第一个参数函数中可以获取到值  
③：rejected:在执行了reject后，promise状态会变成rejected，rejected函数传递的参数，可以在.then的第二个参数函数中获取的到，或者是在.catch获取到，但是如果程序上的错误，得通过.catch函数去拿到失败消息，在.then中是获取不了的.
## 9个方法
1：resolve方法，用于创建成功状态的promise对象，用.then可以获取resolve的值  
**示例**
```js
const p = Promise.resolve("成功");
p.then((res) => {
  console.log("----打印：", res); //----打印： 成功
});
 
//该用法类似于
const p1 = new Promise((resolve, reject) => {
  resolve("成功");
});
p1.then((res) => {
  console.log("----打印：p1", res); //----打印：p1 成功
});
 
//后续代码中都会出现类似，或者另外中写法，尝试的时候，不能同时放出来执行
```
2.reject和第一个类似
**示例**
```js
const p = Promise.reject("失败");
p.then(
  (res) => {
    console.log("----打印：", res); //不执行
  },
  (rej) => {
    console.log("----打印：", rej); //----打印： 失败
  }
);
 
//另外写法 
p.then(
  (res) => {
    console.log("----打印：p", res); //不执行
  },
  (rej) => {
    console.log("----打印：p", rej); //----打印：p 失败
  }
).catch((error) => {
  console.log("----打印：catch", error); //不执行
});
 
//另外写法---基本没有吧catch写在第一个
p.catch((error) => {
  console.log("----打印：catch", error); //----打印：catch 失败
}).then(
  (res) => {
    console.log("----打印：p", res); //不执行
  },
  (rej) => {
    console.log("----打印：p", rej); //不执行
  }
);
 
//另外写法
p.then((res) => {
  console.log("----打印：p", res); //不执行
}).catch((error) => {
  console.log("----打印：catch", error); //----打印：catch 失败
});
 
//该用法类似于
const p1 = new Promise((resolve, reject) => {
  reject("失败");
});
p1.then(
  (res) => {
    console.log("----打印：p1", res); //不执行
  },
  (rej) => {
    console.log("----打印：p1", rej); //----打印：p1 失败
  }
);
```


