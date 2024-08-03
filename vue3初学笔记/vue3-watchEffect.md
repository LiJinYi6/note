**vue3_watchEffect**
先从vue里引入  
watchEffect有点像computed
```js
let sum=ref(0);
watchEffect(()=>{
    //里面用了什么，就会监视什么
    const x1=sum.value
    //没有用的变量，就监视不到
})
```