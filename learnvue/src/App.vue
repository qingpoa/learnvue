<template>
  <div class = "app">
    <h1 class="title">vue 路由</h1>
    <!-- 导航区 -->
     <div class = "nav">
      <a href="#" class="active">首页</a>
      <a href="#">新闻</a>
      <a href="#">关于</a>

     </div>
    <!-- 展示区 -->
    <div class = "content">
      <p>展示区</p>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">

</script>

<style scoped>


.title {
  text-align: center;
  font-size: 3rem;
  height: 100px;
  background-color: #38eb83c9;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 2px;
}
.nav {
  text-align: center;
  font-size: 2rem;
  height: 50px;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 2px;
}
.nav a {
  margin: 0 100px;
  text-decoration: none;
  color: rgb(0, 0, 0);
  border: 1px solid #38eb83c9;
  background-color: #38eb83c9;
  border-radius: 5px;
}

.nav a:hover {
  color: red;
}

.nav a.active {
  color: red;
  background-color: #0c97e7c9;
}

.content {
  margin-top: 20px;
  height: 300px;
  border: 1px solid;
  font-size: 2rem;
  border-radius: 10px;
  padding: 2px;
}
</style>
