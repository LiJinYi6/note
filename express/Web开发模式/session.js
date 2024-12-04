const express=require('express')
var session=require('express-session')
const jwt=require('jsonwebtoken')
const jwtExpress=require('express-jwt')
const app=express()

// 定义用于加密和解密的secret密钥
const secretKey='helloLJY%%%'
app.use(jwtExpress.expressjwt({secret:secretKey,algorithms:["HS256"]}).unless({path:[/^\/api\//]}))
app.use(express.json())
app.use(session({
    secret:'itheima',
    resave:false,
    saveUninitialized:true
}))
app.get('/admin/userInfo',(req,res)=>{
    res.send({
        status:200,
        message:'获取成功',
        username:req.auth.username
    })
})
app.post('/api/login',(req,res)=>{
    console.log('req.body',req.body)
    if(req.body.username!='admin' || req.body.password!="123456")
       {
        res.send({status:1,msg:'登陆失败'})
       }else{

        req.session.user=req.body
        req.session.isLogin=true
        res.send({status:0,
            msg:'登陆成功',
            //参数1用户信息 参数2加密密钥 参数3 配置对象
            token:jwt.sign({username:req.body.username},
                secretKey,
                {expiresIn:'120s'})
        })
       }
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
//捕获错误中间件，捕获错误并将错误消息返回提示用户
app.use((err,req,res,next)=>{
    if(err.name=='UnauthorizedError'){
        return res.send({status:401,message:'token无效或过期！！'})

    }
    res.send({status:500,message:'系统崩溃了'})
})