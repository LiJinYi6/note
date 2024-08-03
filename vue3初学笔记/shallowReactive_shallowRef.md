**shallowReactive-shallowRef**

用于性能优化，当某个对象比较深层而又只需要浅层响应式可以用
===
```js
export default{
    setup(){

        //浅层响应式，job里面的salary改变并不是响应式的
        let person=shallowReactive({
            name:'a',
            age:'ds'
            job:{
                salary:20
            }
        })
        //给对象类型，里面一层就不是响应式，可以处理基本类型的响应式
        let x=shallowRef({
            y:0,
        })


        return {person}
    }
}
```

===
**readonly**
```js
export default{
    setup(){
        let person=reactive({
            name:'a',
            age:'ds'
            job:{
                salary:20
            }
        })
        //只读，重点是（完全改不了数据）
        person=readonly(person)
        //浅层只读，改不了浅层数据
        person=shallowReadonly(person)

        return {person}
    }
}
```