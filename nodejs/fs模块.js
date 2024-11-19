//导入fs模块
const fs=require('fs')
//读取文件
fs.readFile('./初步.md','utf-8',function(err,dataStr){
    //读取成功err的值为null
    console.log(err)
    console.log('----')
    //读取成功的结果
    console.log(dataStr)
})
//判断文件读取是否成功
//使用fs模块时，最好不要用相对路径，在执行node命令时容易出现拼接错误。
//可以用完整路径
//__dirname就是当前文件所处的目录
//因此可以用__dirname+'/file'来拼接路径