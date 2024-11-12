const express=require('express')
const app=express();
const fc=function(req,res,next){
    console.log("这是一个中间件")
    next();
}
//全局生效的中间件
app.use(express.static('public'))
app.use(fc)
//多次调用app.use可以注册多个中间件  
//HEL
app.get('/home',(req,res)=>{
    throw new Error("错误")
    res.send("hello")
})
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.send(err.message)
})
app.listen(80,()=>{
    console.log("serve is start")
})
const ms=function(req,res,next){
    console.log("这是一个局部生效的中间件")
    next();
}
//局部生效的中间件
app.get('/jmidle',ms,function(req,res){
    res.send("局部中间件")
})

//内置中间件的使用
app.post('/p',(req,res)=>{
    res.send('ok')
    console.log(req.body)
})
app.use(express.json)