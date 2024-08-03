**toRef**


```js
import {toRef,toRefs} from 'vue'
export default{
    name:'toRef'
    setup(){
        let person=reactive({
            name:'s',
            age:12,
        })
        //把对象里的某一个属性拿出来变成响应式，由此在模板中使用的时候不用点，没有很大的用处
        //这里的name1其实还是persion.name
        //这里如果直接用ref,修改的不是person里面的东西
        const name1=toRef(person,'name')

        //处理多个变量，属性
        const x=toRefs(person)
        return {
            person,
            name:toRef(person,'name'),
            ...toRefs(person)
        }
    }
}

```