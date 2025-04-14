function myNew(constructer,...args){
    let obj={}
    //让对象指向构造函数的原型
    Object.setPrototypeOf(obj,constructer.prototype)
    //将this上下文绑定到obj，同时传入参数
    let result=constructer.apply(obj,args)
    return result!==null && (typeof result === "object" || typeof result==="function")?result:obj
}

function Person(name,age){
    this.name=name
    this.age=age
}
const person=myNew(Person,'lijy',21)
console.log(person)
