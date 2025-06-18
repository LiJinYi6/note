import {  useReducer, forwardRef, useRef, useImperativeHandle, Component, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, asyncIncrement} from "./store/modules/counterStore";
import { create } from "zustand";
// const Son = forwardRef(function Son(props,ref){
//   const divRef = useRef(null)
//   const handleClick = () => {
//     console.log(divRef.current)
//   }
//   useImperativeHandle(ref,() => {
//     return {
//       handleClick
//     }
//   })
//   return (
//     <div ref={divRef} onClick={handleClick}>
//       Heloise
//     </div>
//   )
// })
// class Counter extends Component {
//   state = {
//     count:0
//   }
//   setCount = () => {
//     this.setState({
//       count:this.state.count+1
//     })
//   }
//   render(){
//     return <button onClick={()=>{this.setCount()}}>{this.state.count}</button>
//   }
// }
const useStore = create((set)=>{
  return {
    count:0,
    inc: () => set((state)=>({count:state.count+1}))
  }
})
function App() {
  // const sonRef=useRef()
  const {count,inc} = useStore()
  return (
    <div>
      {count}
      <button onClick={inc}>+</button>
      {/* <Counter /> */}
     {/* <button onClick={()=>{
      sonRef.current.handleClick()
     }}>
      +
     </button>
     <span>{num}</span>
     <button>
      -
     </button>
     <Son ref={sonRef} /> */}
    </div>
  )
}

export default App;
