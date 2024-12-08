console.log('sdlfs')
function ajaxRequest(url,method="GET",data=null,callback){
    const xhr=new XMLHttpRequest();
    xhr.open(method,url,true)
    //监听，当状态发生变化的时候
    xhr.onreadystatechange=function(){
        //当状态为4的时候说明请求结束，调用回调函数。
        if(xhr.readyState===4){
            if(xhr.status>=200 && xhr.status<=300){
                callback(null,xhr.responseText)
            }else{
                callback(new Error(`requst failed with status code${xhr.status}`))

            }

        }

    }
    //监听错误信息
    xhr.onerror=function(){
        callback(new Error('sdf'))
    }
    //发送请求，分为两类，一类post请求设置请求头携带数据
    if(method==='POST' && data){
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.send(JSON.stringify(data))
    }else{
        xhr.send();
    }
}

//使用例子
const url="https://sdlf/d"
const data={
    title:'foo',
    body:'sdf'
}
ajaxRequest(url,'POST',data,(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})