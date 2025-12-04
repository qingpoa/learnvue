<template>
  <div class="Person">
    <h2>{{sum}}</h2>
    <button @click="addsum">点击sum加1</button>
    <hr>
    <img v-for = "(dog,index) in doglist" :src="dog" :key="index">
    <br>
    <button @click="getdog">加一只狗</button>
  </div>
</template>


<script setup lang = 'ts' name="Person">
  import useadd from '@/hooks/useadd';
  import usedog from '@/hooks/usedog';

  let {sum,addsum} = useadd()

  let {doglist,getdog} = usedog()

  
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

img{
  height: 200px;
  margin-right: 10px;
}
</style>