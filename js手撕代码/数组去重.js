//1.直接使用set方法去重
//使用filter方法和indexOf方法，利用indexOf返回第一个出现的索引
const array=[1,2,3,3,3,4,2,1,5,6,7]
function uniqueArry(array){
    return array.filter((item,index)=>array.indexOf(item)===index)
}
console.log('unique',uniqueArry(array))