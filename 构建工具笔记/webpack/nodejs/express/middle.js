const express=require('express')
const app=express();
const fc=function(req,res,next){
    console.log("这是一个中间件")
    next();
}
//全局生效的中间件
app.use(fc)
app.get('/home',(req,res)=>{
    res.send("hello")
})

app.listen(80,()=>{
    console.log("serve is start")
})