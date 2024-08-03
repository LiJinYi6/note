**customRef**
===
自定义ref
```html
<template>

</template>
```
===

```js
import {ref,cunstomRef} from 'vue'
export default{
    setup(){
        //官方ref
        let keyWord=ref('hello')
        return {keyWord}
        let timer
        let keyWord=myRef('hello')
        //自定义ref,本质是一个函数
        function myRef(value){
            //箭头函数里面必须return一个对象
            return customRef((track,trigger)=>{
                return{
                    get(){
                        //读的时候执行
                        //追踪数据的改变
                        track()
                        return value
                    },
                    set(newValue){
                        //改的时候执行
                        value=newValue
                        clearTimeout(timer)
                        //让vue重新解析模板，加定时器达到防抖的效果
                        timer=setTimeout(()=>{
                            value=newValue
                            trigger()
                        },500)
                        
                    }
                }
            })
        }
    }
}
```