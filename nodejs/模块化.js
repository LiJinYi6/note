//按需加载模块用requier
//加载自定义模块时，需要带路径
console.log("自定义模块")

//模块作用域，在模块中定义的函数或者变量，默认无法被外部使用
//必须通过暴露的方式，每个》js文件中都有module实例
//该实例包含了该模块的相关信息,比如exports属性，其默认是一个空对象
module.exports.sayhello=function(){
    console.log("helloooo")
}

//后面的会覆盖前面的
module.exports={  
    name:'he',
    heel(){
    console.log('sdfkl')
    }
}
//exports和module.exports是指向同一个对象，类似于指针是同一个概念同一个东西
