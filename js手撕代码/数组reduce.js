Array.prototype.myreduce=function(callbak,initvalue){
    if(typeof callbak!=='function'){
        throw new TypeError(callbak+'is not a function')
    }
    for(let i=0;i<this.length;i++){
        initvalue=callbak(initvalue,this[i],i,this)
    }
    return initvalue
}
let arr=[1,2,3,4,5]
console.log(arr.myreduce((acc,current)=>{
    return acc+current
},0))