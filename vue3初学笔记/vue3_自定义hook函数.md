**vue3_自定义hook函数**
===  
```js
import usePoint from '../hooks/usePoint'
export default{
    name:"自定义组合函数",
    //把一下实现打点的东西全部放到hooks文件夹下的js文件中
    setup(){
        //这样写实现代码复用
        let point=usePoint();
        // let point=reactive({
        //     x:0,
        //     y:0,
        // })
        // function savePoint(event){
        //      point.x=event.pageX
        //     point.y=event.pageY
        // }
        // onMouted(()=>{
        //     window.addEventListener('click',savePoint)
        // })
        // onBeforeUnmout(){
        //     window.removeEventListener('click',savePoint)
        // }  
        return{point}
    }
}
```