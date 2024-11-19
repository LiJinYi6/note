const express=require('express')
//这个中间件第三方的，不太需要用，内置有
const parser=require('body-parser')
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(parser.urlencoded({extended:false}))


const fc=function(req,res,next){
    console.log("这是一个中间件")
    next();
}
//全局生效的中间件
app.use(express.static('public'))
app.use(fc)
//多次调用app.use可以注册多个中间件  
//HELs
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

//内置中间件的使用express.json
app.post('/p',(req,res)=>{
    res.send('ok')
    console.log(req.body)
})
app.post('/u',(req,res)=>{
    res.send('ok')
    console.log(req.body)
})

//第三方中间件body-parser
//首先下载
app.post('three',(req,res)=>{
    res.send('ok')
    //如果不配置任何解析表单数据的中间件，则结果等于undefined
    console.log(req.body)
})

