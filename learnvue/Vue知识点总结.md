# Vue.js 重点知识点总结

## 1. Vue 3 简介

Vue.js 是一个用于构建用户界面的渐进式JavaScript框架，Vue 3带来了性能提升、更好的TypeScript支持和全新的组合式API。

## 2. 核心概念

### 2.1 组件基础

组件是Vue应用的基本构建单元，一个典型的Vue单文件组件(SFC)包含三个部分：

```vue
<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello Vue 3!')
</script>

<style scoped>
div {
  color: blue;
}
</style>
```

### 2.2 响应式系统

Vue 3使用Proxy实现响应式，主要API包括：

#### ref
用于创建简单类型的响应式数据

```typescript
import { ref } from 'vue'

const count = ref(0)
count.value++ // 修改值
```

#### reactive
用于创建对象类型的响应式数据

```typescript
import { reactive } from 'vue'

const user = reactive({
  name: '张三',
  age: 18
})
user.age++ // 直接修改属性
```

#### computed
计算属性，具有缓存特性

```typescript
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
```

#### watch 和 watchEffect
监听数据变化

```typescript
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)

// 监听指定数据
watch(count, (newVal, oldVal) => {
  console.log('count changed:', newVal)
})

// 自动监听引用的数据
watchEffect(() => {
  console.log('count value:', count.value)
})
```

## 3. 组合式 API (Composition API)

### 3.1 setup 函数

组合式API的入口点，在组件创建前执行

```typescript
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    
    onMounted(() => {
      console.log('组件已挂载')
    })
    
    return { count }
  }
}
```

### 3.2 script setup 语法糖

更简洁的方式使用组合式API

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
// 变量和函数自动暴露给模板
</script>
```

### 3.3 生命周期钩子

组合式API中的生命周期钩子函数：

- `onBeforeMount` - 组件挂载前
- `onMounted` - 组件挂载后
- `onBeforeUpdate` - 组件更新前
- `onUpdated` - 组件更新后
- `onBeforeUnmount` - 组件卸载前
- `onUnmounted` - 组件卸载后

## 4. 模板语法

### 4.1 插值

```vue
<span>Message: {{ msg }}</span>
```

### 4.2 指令

#### v-bind - 动态绑定属性

```vue
<div v-bind:class="{ active: isActive }"></div>
<!-- 简写 -->
<div :class="{ active: isActive }"></div>
```

#### v-on - 事件处理

```vue
<button v-on:click="handleClick"></button>
<!-- 简写 -->
<button @click="handleClick"></button>
```

#### v-if/v-else-if/v-else - 条件渲染

```vue
<div v-if="type === 'A'"></div>
<div v-else-if="type === 'B'"></div>
<div v-else></div>
```

#### v-for - 列表渲染

```vue
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
```

#### v-model - 双向数据绑定

```vue
<input v-model="message" />
```

## 5. 组件通信

### 5.1 Props 传递

父组件向子组件传递数据

```vue
<!-- 父组件 -->
<ChildComponent :title="pageTitle" />

<!-- 子组件 -->
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
}>()
</script>
```

### 5.2 事件发送

子组件向父组件发送消息

```vue
<!-- 子组件 -->
<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits<{
  (e: 'update', value: number): void
}>()

function handleUpdate() {
  emit('update', 42)
}
</script>

<!-- 父组件 -->
<ChildComponent @update="handleUpdate" />
```

### 5.3 provide/inject

跨层级组件通信

```vue
<!-- 祖先组件 -->
<script setup lang="ts">
import { provide } from 'vue'

provide('user', { name: '张三' })
</script>

<!-- 后代组件 -->
<script setup lang="ts">
import { inject } from 'vue'

const user = inject('user')
</script>
```

## 6. 状态管理

### 6.1 全局状态管理

使用pinia（Vue官方推荐的状态管理库）

```typescript
// store/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '张三',
    age: 18
  }),
  actions: {
    incrementAge() {
      this.age++
    }
  }
})
```

## 7. 高级特性

### 7.1 Teleport

将内容渲染到指定DOM节点

```vue
<Teleport to="body">
  <div class="modal">Modal Content</div>
</Teleport>
```

### 7.2 Suspense

处理异步组件加载状态

```vue
<Suspense>
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>
```

### 7.3 自定义指令

```typescript
// 全局自定义指令
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})
```

## 8. 性能优化

### 8.1 v-memo 指令

记忆化模板内容，避免不必要的更新

```vue
<div v-memo="[valueA, valueB]">
  {{ heavyComputation() }}
</div>
```

### 8.2 虚拟滚动

处理大数据列表渲染

### 8.3 代码分割

使用动态import实现组件懒加载

```javascript
const LazyComponent = () => import('./LazyComponent.vue')
```

## 9. TypeScript 支持

Vue 3对TypeScript提供了更好的支持

### 9.1 组件类型定义

```typescript
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<{
        name: string
        age: number
      }>,
      required: true
    }
  }
})
```

### 9.2 script setup 中的类型导入

```vue
<script setup lang="ts">
import type { User } from './types'
import { ref } from 'vue'

const user = ref<User>({ name: '张三', age: 18 })
</script>
```

## 10. Vue 3 与 Vue 2 的主要区别

1. **组合式 API** - 提供更灵活的代码组织方式
2. **更好的性能** - 基于Proxy的响应式系统
3. **更小的包体积** - 按需导入
4. **更好的TypeScript支持**
5. **多个根节点** - 不再限制只能有一个根元素

## 11. 实战建议

1. 优先使用组合式API，特别是script setup
2. 使用TypeScript提高代码质量
3. 合理使用响应式API（ref/reactive）
4. 注意组件的拆分和复用
5. 使用pinia进行状态管理
6. 掌握Vue DevTools进行调试

---

本文档涵盖了Vue.js的核心知识点，适合初学者学习和进阶开发者参考。建议结合实际项目练习，加深理解和记忆。