//方法1，使用递归
//weakMap也是map的一种，不过不同的地方在于weakMap的键必须是一个对象
//比较完善的过程是区分不同结构进行处理（比如区分对象如何处理，数组如何处理等）

function deepCopy(obj,hash=new WeakMap()){
    if(obj==null || typeof obj!="object"){
        return obj
    }
    if(hash.has(obj)){
        return hash.get(obj)
    }
    if(Array.isArray(obj)){
        let copyObj=[]
        hash.set(obj,copyObj)
        obj.forEach((item,index)=>{
            copyObj[index]=deepCopy(item,hash)
        })
        return copyObj
    }
    let objCopy={}
    hash.set(obj,objCopy);
    Object.keys(obj).forEach((key)=>{
        objCopy[key]=deepCopy(obj[key],hash)
    })
    return objCopy
}

const original={
    name:'Yupi',
    age:18,
    skills:['coding','design'],
    address:{
        city:'Shanghai',
        zip:'101000',
    }
}
original.self=original
console.log(original.self)
const copy=deepCopy(original)
console.log(copy);
console.log(copy===original)
console.log(copy.address===original.address)
const copy2=original
console.log(copy2===original)
console.log(copy.address===original.address)

//方法2:使用json的序列化和反序列化
//缺点：无法处理函数，undefine，Symbol和循环引用等
function deepCopy2(obj){
    return JSON.parse(JSON.stringify(obj))
}
// console.log("json",deepCopy2(original).address===original)