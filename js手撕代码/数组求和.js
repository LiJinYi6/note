function getSum(arry){
    let sum=0;
    arry.forEach(element => {
        sum+=element
    });
    arry.reduce((acc,current)=>{
        acc+=current
    },0)
    return sum;
}
