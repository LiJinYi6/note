const express=require('express')
const app=express();
const m=require('./myMidlle')
app.use(m)
app.post('/home',(req,res)=>{
    console.log(req.body);
    res.send('ok')
})

app.listen(80,function(){
    console.log('serve is start')
})
