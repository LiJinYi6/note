const qs=require('querystring')
const myMidlle=(req,res,next)=>{
    let str=""
    req.on("data",(chunk)=>{
        str+=chunk
    })
    req.on('end',()=>{
        //完整请求体
        console.log('完整请求',str)
        //解析数据
        const body=qs.parse(str)
        req.body=body
        next()
    })
}
module.exports=myMidlle
