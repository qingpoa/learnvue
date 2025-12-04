<template>
  <div class = "content">
    <Person/>
  </div>
</template>

<script lang="ts" setup name="App">
  import { reactive,ref } from 'vue';
  import Person from './components/person.vue'
  import type { Persons } from './types';
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
