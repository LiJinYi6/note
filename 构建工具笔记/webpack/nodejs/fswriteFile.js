const fs=require('fs')
fs.writeFile('nodedemo.js','/bu',function(err){
    console.log(err)
})
//如果写入失败，err为一个错位对象