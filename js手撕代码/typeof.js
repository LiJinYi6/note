function mytypeof(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase()
}

let a=new Object()
let b=[]
function Persion(name,age){
    this.name=name
    this.age=age
}
let c=new Persion()
let d="ggg"
let x=12
let y=void 0
let z=null
console.log(mytypeof(a))
console.log(mytypeof(b))
console.log(mytypeof(c))
console.log(mytypeof(d))
console.log(mytypeof(x))
console.log(mytypeof(y))
console.log(mytypeof(z))
console.log(new Map())

