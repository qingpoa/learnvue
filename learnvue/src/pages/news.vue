<template>
  <div class="news">
    <h1>新闻中心</h1>
    <div class="news-filter">
      <button 
        v-for="filter in filters" 
        :key="filter"
        @click="currentFilter = filter"
        :class="{ active: currentFilter === filter }"
      >
        {{ filter }}
      </button>
    </div>
    <div class="news-list">
      <div 
        v-for="(news, index) in filteredNews" 
        :key="index"
        class="news-item"
      >
        <h3>{{ news.title }}</h3>
        <p>{{ news.content }}</p>
        <span class="news-date">{{ news.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 新闻数据
const newsData = ref([
  { title: 'Vue 3.5版本发布', content: 'Vue 3.5带来了性能提升和新特性', date: '2023-12-15', category: '技术' },
  { title: 'TypeScript 5.9发布', content: 'TypeScript 5.9增加了新的类型检查功能', date: '2023-12-10', category: '技术' },
  { title: 'Vite 7.0发布', content: 'Vite 7.0提供了更快的构建速度', date: '2023-12-05', category: '技术' }
])

// 筛选功能
const filters = ['全部', '技术']
const currentFilter = ref('全部')

const filteredNews = computed(() => {
  if (currentFilter.value === '全部') {
    return newsData.value
  }
  return newsData.value.filter(news => news.category === currentFilter.value)
})
</script>

<style scoped>
.news {
  padding: 20px;
  background-color: #e6f2ff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.news-filter {
  margin: 15px 0;
}

.news-filter button {
  padding: 6px 12px;
  margin-right: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.news-filter button.active {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
}

.news-item {
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.news-date {
  font-size: 0.8rem;
  color: #666;
}
</style>