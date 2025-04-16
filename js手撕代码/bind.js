Function.prototype.myBind=function(obj,...args){
    if(typeof this!=="function"){
        throw TypeError(this+"is not a function")
    }
    let fn=this
    return function(...newargs){
        return fn.apply(obj,args.concat(newargs))
    }
}

const obj={
    name:'ljy'
}
function fn(a,b){
    console.log(a,b,this.name)
}
let fn2=fn.myBind(obj,1)
fn2(2)