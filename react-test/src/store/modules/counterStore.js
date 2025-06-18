// 从 Redux Toolkit 中导入 createSlice 函数
// createSlice 是一个工具函数，用于简化 Redux reducer 逻辑和 action 创建
import { createSlice } from "@reduxjs/toolkit";

// 使用 createSlice 创建一个 Redux slice
// slice 是 Redux 中的一个概念，包含了 reducer 逻辑和相关的 actions
const counterStore = createSlice({
  // name: slice 的名称，在 Redux DevTools 中会显示这个名称
  name: "counter",
  // initialState: 定义状态的初始值
  initialState: {
    count: 0,
  },
  // reducers: 定义所有的 reducer 函数
  // reducer 函数用于处理状态更新逻辑
  // 同步修改
  reducers: {
    // increment: 增加计数的 reducer
    // state 参数是当前的状态，可以直接修改（Redux Toolkit 内部使用了 Immer）
    increment: (state , action) => {
      state.count += action.payload || 1;
    },
    // decrement: 减少计数的 reducer
    decrement: (state , action) => {
      state.count -= action.payload;
    },
  },
});

// 导出 action creators
// increment 和 decrement 是自动生成的 action 创建函数
// 在组件中可以通过 dispatch(increment()) 来触发相应的 action
const asyncIncrement = ()=>{
  return async (dispatch) => {
    await setTimeout(() => {
      dispatch(counterStore.actions.increment(1));
    }, 5000);
  }
}
export const { increment, decrement  } = counterStore.actions;
export {asyncIncrement}
// 默认导出 reducer
// 这个 reducer 会被添加到根 store 中
export default counterStore.reducer;
