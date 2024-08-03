**provide-inject**
===
用于组件间的通讯，适用于组孙间的通讯
```js
export default{
    name:'父组件'
    setup(){
    provide('car',car)
}
}

export default{
    name:'后代组件'
    setup(){
    let car=inject('car')
    return {car}
}
}
```