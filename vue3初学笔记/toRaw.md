**toRaw-markRaw**
===
reactive的逆过程,把响应式变量变成普通变量
只能对reactive定义的响应式使用，对于ref不行
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
        let sum=ref(0)
       //
       const person2=toRaw(person)
        function addCar(){
            let car="benci"
            //直接追加，新元素依旧是响应式
            person.car=car
            //用markRaw,car数据会改变但不会变成响应式，
            //能够加强性能
            person.car=markRaw(car)
        }

        return {person,sum}
    }
}
```