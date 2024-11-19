const express=require('express')
//解决跨域问题
const cors=require('cors')
const app=express()
const router=require('./router')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//全局注册
app.use(cors)
//相当于一个中间件
app.use('/api',router)
app.listen(80,()=>{
    console.log('express serve running at http://127.0.0.1')
})