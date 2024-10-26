const express=require('express')
const app=express();
app.listen(80,()=>{
    console.log("express running at")
})
//get请求
app.get('/index',function(req,res){
    console.log("请求地址为"+req.url)
    res.setHeader('Content-Type',"text/html; charset=utf-8")
    //既可以响应json对象也可以响应一个文本
    res.send({hello:'hello express',name:'ljy'})
})
app.get('/',(req,res)=>{
    //获取路径参数
    console.log(typeof(req.query))
    res.send(req.query)
})
app.get('/params/:id',(req,res)=>{
    //获取请求中的动态参数
    console.log(typeof(req.params))
    res.send(`id${req.params.id}`)
})

///托管静态资源，可以把图片，css,js等静态资源对外开放访问
app.use(express.static('public'))
//挂在前缀,访问静态资源前需要添加一个public
app.use('public',express.static('public'))