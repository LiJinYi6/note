Array.prototype.myfilter = function(callback) {
    if(typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    let res=[]
    for(let i=0;i<this.length;i++) {
        if(callback(this[i],i,this)) {
            res.push(this[i])
        }
    }
    return res
}
const arr=[1,2,3,4,5,6]
console.log(arr.myfilter((item)=>item===1))