# 介绍
esma开发的官方模块化标准，适用于浏览器环境和nodejs环境，但是默认不支持服务器端
**注意**
使用了模块化语法时  
在用script标签导入时，type不能在为“text/javascript"
而必须为module

# 导出
在变量前加上export
比如
```js
// 方法1 分别导出
export function(){

}
export const name='asdfl'

//方法2 统一导出
//注意这不是一个对象
export {name,slogan,getTel}
//默认导出 交出的时一个对象
export default {
    name:name ,slogan,getTel
}
//三种方式可以同时使用，不过导出对象是{a,b,default:{c}}

```


# 导入

```js
//全部导入
import * as school from './school.js'
//命名导入，如果不想用那个名字可以 as shoolName 适用于分别导出和统一导出
import {name} from './shool.js'
//默认导入， 使用默认导出时，可以直接用一个对象接收
import xxx from './shool.js'
//动态导入
在需要的地方用const x=import('./xxx')
x是个promise值
//import可以不接受数据
import './xxx.js'
```
**注意**
1. 命名导入和默认导入可以同时使用
2. import引入的数据都当作常量处理不能更改
3. import引入拿到的是引用，用的同一片内存空间
4. 由此导出数据时，最好定义为常量
5. 而commonjs引入的数据是复制的，对其的改变不会引起原来数据的改变，同样在原来数据改变时，不影响引入时的数据


# 如何在node下运行es6模块化规范
**注意**
必须时node12及以上版本
方法1:  
将.js文件后缀改成mjs就行
方法2：  
在package.json中配置
{
    type:'module'
}


# 如何解决全局污染的问题
当script引入模块即type=module时，.js文件中的东西并不在window身上
# 如何解决依赖混乱问题
文件的依赖是模块一个引入一个，不会发生顺序混乱的问题
# 数据安全问题
数据不会出现在window上，另外没有导出的都是模块内私有的