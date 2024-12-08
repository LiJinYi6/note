//一种跨域方式，主要是利用jsonp的工作原理是利用script标签可以跨域加载javascript代码的特性
//通过动态加载script标签来实现跨于，src防止请求地址，会自动
//向该地址发送一个get请求。
//有一定的局限性，首先只能发器post请求，其次需要服务器支持
//服务器需要把响应数据包装成回调函数调用的方式
//另外安全性无法保证。
function jsonp(url,params,callback,callbackName='callback') {
    const script=document.createElement('script')
    let queryString=""
    let callbackFuncName='jsonpCallback_'+Date.now()
    params[callbackName]=callbackFuncName
    for(const key in params){
        if(params.hasOwnProperty(key)){
            queryString+=`${key}=${params[key]}&`
        }
    }
    const fullUrl=`${url}?${queryString.slice(0,-1)}`
    script.src=fullUrl
    window[callbackFuncName]=(data)=>{
        callback(data)
        document.body.removeChild(script)
        delete window[callbackFuncName]
    }
    document.body.appendChild(script)
    
}