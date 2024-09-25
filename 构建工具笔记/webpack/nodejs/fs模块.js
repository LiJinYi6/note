const fs=require('fs')
fs.readFile('./初步.md','utf-8',function(err,dataStr){
    console.log(err)
    console.log('----')
    console.log(dataStr)
})