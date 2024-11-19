var express=require('express')
const Router=express.Router();

Router.get('/ljy',(req,res)=>{
    res.send({
        name:'李锦怡',
        age:'20'
    })
})
Router.post('/postRequest',(req,res)=>{
    res.send("hello")
})

module.exports=Router