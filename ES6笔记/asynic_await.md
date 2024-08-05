# async
## 定义
>1：async就是异步，用它声明的方法时异步函数，await就是等待异步方法执行  
2：用它什么的函数不会阻塞后面代码的执行，而await会等待一个异步方法执行完成再执行await后的代码  
3：await等待一个Promise对象
4：如果async函数中有返回值，当调用该函数时，内部会调用Promise.resolve()方法把它转化成一个promise对象作为返回，但如果timeout函数内部抛出错误呢？ 那么就会调用Promise.reject() 返回一个promise 对象
5:要是想要获取async函数的执行结果就必须调用promise的then或catch来给它注册回调
6：如果async 函数执行完，返回的promise 没有注册回调函数，比如函数内部做了一次for 循环，你会发现函数的调用，就是执行了函数体，和普通函数没有区别，唯一的区别就是函数执行完会返回一个 promise 对象
>
## 示例
```js
 async function timeout() {
     return 'hello world!'
 }
 timeout()
 console.log('我虽然在后面，但是先执行')
```

# await
>1：等待Promise对象的resolve/reject 然后拿到值作为运算结果
2：等待到非pormise的值，会将值包装成一个resolve的promise对象
3：await 优势在于处理 then 链，使代码看起来像同步代码一样
4:当遇到 await 时，会阻塞函数内部处于它后面的代码（而非整段代码），去执行该函数外部的同步代码；当外部的同步代码执行完毕，再回到该函数执行剩余的代码。并且当 await 执行完毕之后，会优先处理微任务队列的代码。
>
## 示例
```js
async function fn1 (){
  console.log(1)
  await fn2() // 遇到fn2，进入执行
  console.log(2) // 阻塞，加入微任务队列
}
async function fn2 (){
  console.log('fn2')
}
fn1()
console.log(3)

// 输出结果：1，fn2，3，2
```

```js
  async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
    setTimeout(() => {
      console.log('timer1')
    }, 0)
  }
  async function async2() {
    setTimeout(() => {
      console.log('timer2')
    }, 0)
    console.log('async2')
  }
  async1()
  setTimeout(() => {
    console.log('timer3')
  }, 0)
  console.log('start')
// async1 start => async2 => start => async1 end => timer2 => timer3 => timer1

```

# 新概念
## 宏观任务队列
## 微观任务队列