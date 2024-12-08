let array=[[1,2,3],[4,5,6],[7,8,9]]
//递归实现
function myflat1(array){
    let result=[]
    array.forEach((item)=>{
        if(Array.isArray(item)){
            result.push(...myflat1(item))
        }else{
            result.push(item)
        }
    })
   return result
}
//reduce实现
function myfalt2(array){
    let result=[]
    return array.reduce((acc,current)=>{
       return acc.concat(
        Array.isArray(current)?myfalt2(current):current
       )
    },[])
}
console.log('递归 ',myflat1(array))
console.log('reduce',myfalt2(array))