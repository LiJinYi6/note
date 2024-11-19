const express=require('express')
const app=express();
const router=require('./router')
// app.use(router)
//添加路由前缀
app.use('/routes',router)
app.listen(80,()=>{
    console.log("server goon")
})