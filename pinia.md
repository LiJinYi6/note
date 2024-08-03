#**pinia初步使用**#
---
pinia和vuex总体比较相似，均用于组件间的通讯，与vuex不同的是，其中只包括actions
state,getter,而没有mutations  
基本用法如下（选项式用法）
```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})

//组件中使用
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

counter.count++
// 用$patch调用重新赋予count新值
counter.$patch({ count: counter.count + 1 })
// 或直接用‘.’运算符调用
counter.increment()
</script>

<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>
</template>

```

---
组合式用法：
```js
//与setup()写法基本一致，如果需要计算属性可以引入computed
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
  return { count, increment }
})
```