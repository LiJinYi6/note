Array.prototype.mypush=function(...items){
    let length=this.length
    items.forEach((item,index)=>{
        this[length]=item
        length++
    })
    return length+1
}

let arr=[1,2,3]
arr.mypush(1,2,3,4)
console.log('arr.length',arr.length)
console.log('arr',arr)