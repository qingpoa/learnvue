<template>
  <div class="Person">
    <h2>{{sum}}</h2>
    <button @click="addsum">点击sum加1</button>
  </div>
</template>


<script setup lang = 'ts' name="Person">
  import {ref, onBeforeMount, onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
  let sum = ref(0)
  function addsum()
  {
    sum.value += 1
  } 
  console.log("创建")
  onBeforeMount(() => {
    console.log("挂载前")
  })
  onMounted(()=>{
    console.log("挂载后")
  })
  onBeforeUpdate(()=>{
    console.log("更新前")
  })
  onUpdated(()=>{
    console.log("更新完毕")
  })
  onBeforeUnmount(()=>{
    console.log("卸载前")
  })
  onUnmounted(()=>{
    console.log("卸载后")
  })
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