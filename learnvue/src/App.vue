<script lang="ts" setup name="App">
  import Person from './components/person.vue'

</script>
<template>
  <div class = "content">
    <h1>hello</h1>
    <Person/>
  </div>
</template>

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
