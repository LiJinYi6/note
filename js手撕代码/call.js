Function.prototype.myCall=function(thisArg,...args){
    if(typeof this!=="function"){
        throw TypeError(this +"is not a function")
    }
    thisArg=thisArg || globalThis
    const fnSy=Symbol()
    thisArg[fnsy]=this
    const result=thisArg[fnSy](...args)
    delete thisArg[fnSy]
    return result
}
let obj={
    name:"sdf"
}

function func(a,b){
    console.log(a,b,this.name)
}
func.call(obj,1,2)
//founction.call(obj,...args)
//obj为需要给函数绑定的this环境，args为函数定义中原本要传入的参数
