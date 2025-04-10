myinstanceof=function(left,right){
    let prototype=right.prototype;
    let __proto=left.__proto__;
    while(__proto!=null){
        if(__proto===prototype){
            return true
        }
        else{
            __proto=__proto.__proto__
        }
    }
    return false
}
let a=[1,2,3]
console.log(myinstanceof(a,Object))