Object.myCreate=function(options){
    //传入对象不是一个对象处理
    if(typeof options!=='object'){
        throw new TypeError('Object prototype may only be an Object or null')
    }
    function F(){

    }
    F.prototype=options;
    return new F();
}