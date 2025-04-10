Array.prototype.mymap = function(callback) {
    if(typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    let res=[]
    for(let i=0;i<this.length;i++) {
        res.push(callback(this[i],i,this))
    }
    return res
}

let arr = [1,2,3,4,5]
console.log(arr.mymap(item=>item*2))