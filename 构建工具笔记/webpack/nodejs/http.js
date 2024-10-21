const http=require('http')

//创建服务器
server=http.createServer();
//绑定事件(request),被触发后执行回调函数
server.on('request',(req,res)=>{
    //req请求对象（获取客户端相关的数据和属性）
    const method=req.method;
    const url=req.url;
    let content="<h1> 404</h1>"
    if(url==='/' || url=== '/index.html')
    {
        content='<h1>首页</h1>'
    }else if(url==='/sku')
    {
        content='<h1> sku模块</h1>'
    }
    //res响应对象，与服务器相关

     //如果str为中文会出现乱码问题，因此需要手动设置格式
     //设置响应头和请求头类似。
     res.setHeader('Content-Type',"text/html; charset=utf-8")


    //响应内容且结束请求
    res.end(content)

})
//启动web服务，再80端口
server.listen(80,()=>{
    console.log('http server runing at http://127.0.0.1')
})