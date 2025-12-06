<template>
  <div class="about">
    <h1>关于我们</h1>
    <div class="about-content">
      <p>这是一个使用Vue 3 + TypeScript构建的项目</p>
      <div class="project-info">
        <h3>项目信息</h3>
        <ul>
          <li>框架: Vue 3</li>
          <li>语言: TypeScript</li>
          <li>构建工具: Vite</li>
        </ul>
      </div>
      <div class="counter">
        <h3>访问计数器</h3>
        <p>当前访问量: {{ count }}</p>
        <button @click="incrementCount">增加计数</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 简单计数器功能
const count = ref(100)

function incrementCount() {
  count.value++
}
</script>

<style scoped>
.about {
  padding: 20px;
  background-color: #fff8dc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.about-content {
  margin-top: 20px;
}

.project-info ul {
  list-style-type: none;
  padding: 0;
}

.project-info li {
  margin: 8px 0;
  padding: 5px;
  background-color: white;
  border-radius: 4px;
}

.counter {
  margin-top: 20px;
  padding: 15px;
  background-color: #e8f5e8;
  border-radius: 8px;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #35495e;
}
</style>