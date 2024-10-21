const path=requier('path')
//其中dirname是当前目录
let pathstr=path.join(__dirname,'/js模块');
// ../会取消前面的路径

//获取路径的最后一个部分的文件名

//第二个参数可以去掉扩展名
let fileName=path.basename('路径')

//获取扩展名
let extName=path.extname('路径')