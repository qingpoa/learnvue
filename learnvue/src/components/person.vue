<template>
  <div class="Person">

    <!-- 姓：<input type="text" v-model="firstname"><br>
    名：<input type="text" v-model="lastname"><br>
    全名：<span>{{fullname}}</span> -->

    <!-- <h1>{{ sum }}</h1>
    <button @click = "changesum">点击sum加1</button> -->

    <!--<h1>{{ person.name }}</h1>
    <h1>{{ person.age }}</h1>
    <button @click = "changePerson">点击修改person</button>
    <button @click = "changeAge">点击age加1</button>-->

    <!-- <h1>当水温达到60或者水位达到40时,报警</h1>
    <h1>水温：<span>{{ temper }}</span></h1>
    <h1>水位：<span>{{ height }}</span></h1>
    <button @click = "changeTemperature">点击水温加10</button>
    <button @click = "changeHeight">点击水位加10</button> -->
  </div>
</template>


<script setup lang = 'ts' name="Person">
  import { ref , computed, watch, reactive, watchEffect} from 'vue'

  //computed计算
  // let firstname = ref("张")
  // let lastname = ref("三")
  // let fullname = computed(() =>{
  //   return firstname.value.slice(0,1).toUpperCase() + firstname.value.slice(1) + "-" + 
  //   lastname.value
  // })


  //监视1
  // let sum = ref(0)
  // function changesum(){
  //   sum.value += 1
  // }
  // const sumWatch = watch(sum, (newValue, oldValue) => {
  //   console.log(newValue, oldValue)
  //   if(newValue > 10){
  //     sumWatch() //结束监视
  //   }
  // })

  //监视2
  // const person = ref({
  //   name: "张三",
  //   age: 18
  // })
  // function changePerson(){
  //   person.value = {
  //     name: "李四",
  //     age: 20
  //   }
  // }
  // function changeAge(){
  //   person.value.age += 1
  // }
  // watch(person, (newValue, oldValue) => {
  //   console.log(newValue, oldValue)
  // },{deep: true, immediate: true})

  //监视reactive对象默认开启深度监视
  // let person = reactive({
  //   name: "张三",
  //   age: 18
  // })

  // function changePerson(){
  //   Object.assign(person, {
  //     name: "李四",
  //     age: 20
  //   })
  // }
  // function changeAge(){
  //   person.age += 1
  // }
  // watch(person, (newValue, oldValue) => {
  //   console.log(newValue, oldValue)
  // })

  // let temper = ref(10)
  // let height = ref(0)
  // function changeTemperature(){
  //   temper.value += 10
  // }
  // function changeHeight(){
  //   height.value += 10
  // }

  // watchEffect(()=>{
  //   if(temper.value >= 60 || height.value >= 40){
  //     console.log("报警")
  //   }
  // })
  // watch([temper, height], (newValue, oldValue) => {
  //   if(newValue[0] >= 60 || newValue[1] >= 40){
  //     console.log("报警")
  //   }
  // })
</script>




<style scoped>
li {
  font-size: 25px;
}
.Person {
  background-color: #ca0d0dc9;
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