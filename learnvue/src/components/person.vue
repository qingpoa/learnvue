<template>
  <div class="Person">
    <ul>
      <li v-for="item in a.list" :key = "item.id">姓名：{{ item.name }}-年龄：{{ item.age }}</li>
    </ul>
  </div>
</template>


<script setup lang = 'ts' name="Person">
  import { ref , computed, watch, reactive, watchEffect} from 'vue'
  import { type person, type Persons }  from "../types"
  let a = defineProps<{list?:Persons}>()
</script>




<style scoped>
li {
  font-size: 25px;
}
.Person {
  background-color: #38eb83c9;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 2px;
}
.Person h1 {
  font-size: 2rem;
}
.Person button {
  margin-bottom: 20px;
}
.Person input {
  margin-bottom: 20px;
  height: 30px;
  border-radius: 5px;
}
</style>