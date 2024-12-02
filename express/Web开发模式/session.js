const express=require('express')
var session=require('express-session')
const app=express()
app.use(session({
    secret:'itheima',
    resave:false,
    saveUninitialized:true
}))
app.post('/api/login',(req,res)=>{
    if(req.body.username!='admin' || req.body.password!="123456")
        res.send({status:1,msg:'登陆失败'})
    req.session.user=req.body
    req.session.isLogin=true
    res.send({status:0,msg:'登陆成功'})
})
app.get('/api/username',(req,res)=>{
    if(!req.session.isLogin)
        res.send({status:0,msg:'获取失败'})
    res.send({status:1,msg:'success',username:req.session.user.username})

})

app.post('/api/logout',(req,res)=>{
    req.session.destroy()
    res.send({
        status:0,
        msg:'退出登陆成功'
    })
})

app.listen(80,()=>{
    console.log('server is go')
})