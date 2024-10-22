# npm与包
第三方模块与包是同一个概念，  
不同与内置模块和自定义模块  
包由第三方开发，免费使用  
## 为啥需要包
![alt text](image-8.png)、
包是用内置模块封装出来的，提高开发效率。
## 下载来源
![alt text](image-10.png)
## 下载包
通过 npm包管理工具，安装nodejs时就安好了npm 包管理工具了。
## npm常用包

## 包的版本号
点分十进制  
第一位数字，底层重构
![alt text](image-11.png)

## 包管理配置文件
package.json
![alt text](image-12.png)
### 多人协作问题
![alt text](image-13.png)
新建一个package.json
![alt text](image-14.png)
快速创建package.json文件  
> 该命令智能在英文文件中执行

### 一次性安装所有的包
npm install 会读取package.js文件中的dependences节点

### 卸载包 
npm uninstall