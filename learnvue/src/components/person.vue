<template>
  <div class="Person">
    <h2>{{ zhangsan.name }}</h2>
    <ul>
      <li v-for="item in personss" :key = "item.id">姓名：{{ item.name }}-年龄：{{ item.age }}</li>
    </ul>
  </div>
</template>


<script setup lang = 'ts' name="Person">
  import { ref , computed, watch, reactive, watchEffect} from 'vue'
  import { type person, type Persons }  from "../types"

  // let zhangsan:perosn = reactive({
  //   name: "张三",
  //   age: 18,
  //   id: 1
  // })

  let zhangsan = reactive<person>({
    name: "张三",
    age: 18,
    id: 1
  })

  let personss = reactive<Persons>(
    [
      {
        name: "张三",
        age: 18,
        id: 1
      },
      {
        name: "李四",
        age: 18,
        id: 2
      },
      {
        name: "王五",
        age: 18,
        id: 3
      }
    ]
  )
  zhangsan.name = "zhang-三"
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