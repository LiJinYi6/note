Function.prototype.myApply=function(thisArgs,args){
    if(typeof this !=="function"){
        throw TypeError(this+"is not a function")
    }
    thisArgs=thisArgs || globalThis
    let fnSy=Symbol()
    thisArgs[fnSy]=this

    let result=thisArgs[fnSy](...args)
    delete thisArgs[fnSy]
    return result
}

let obj={
    name:'ljy'
}
function fn(a,b){
    console.log(a,b,this.name)
}
fn.myApply(obj,[1,2])