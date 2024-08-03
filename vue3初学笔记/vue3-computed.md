**vue3_computed**
===
```js
// 简写：写成箭头函数
computed(()=>{
return x
})
//要带改的话，用对象传入
computed({
    get(){
        return 
    },
    set(value){
        // 修改
    }
})
```