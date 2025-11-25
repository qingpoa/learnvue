<template>
  <div class = "content">
    <Person :list="list"/>
  </div>
</template>

<script lang="ts" setup name="App">
  import { reactive } from 'vue';
import Person from './components/person.vue'
import type { Persons } from './types';
  let list = reactive<Persons>([{
    name:"张三",
    age:18,
    id:1
  },
  {
    name:"李四",
    age:18,
    id:2
  }])
</script>

<style scoped>

.content {
  background-color: aqua;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 2px;
}
.content h1 {
  font-size: 2rem;
}
</style>
