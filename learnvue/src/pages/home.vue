<template>
  <div class="home">
    <h1>欢迎来到首页</h1>
    <p>{{ welcomeMessage }}</p>
    <button @click="changeMessage">更改欢迎语</button>
    <div class="feature-list">
      <div v-for="(feature, index) in features" :key="index" class="feature-item">
        {{ feature }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 响应式数据
const welcomeMessage = ref('这是一个Vue 3项目首页')
const features = ref(['响应式设计', '组件化开发', 'TypeScript支持', '组合式API'])

// 方法
function changeMessage() {
  welcomeMessage.value = '首页内容已更新！'
}
</script>

<style scoped>
.home {
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
}

button:hover {
  background-color: #35495e;
}

.feature-list {
  margin-top: 20px;
}

.feature-item {
  padding: 8px;
  background-color: white;
  margin: 5px 0;
  border-radius: 4px;
}
</style>