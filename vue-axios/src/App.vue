<template>
  <div>
    <div class="menu-container">
      <router-link to="/axios-get">Axios Get</router-link>
      <router-link to="/axios-get-async-await">Axios Get Async/Await</router-link>
      <router-link to="/axios-post">Axios Post</router-link>
      <router-link to="/axios-post-async-await">Axios Post Async/Await</router-link>
      <router-link to="/axios-global">Axios Global</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.menu-container {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  font-size: 20px;
  margin-bottom: 20px;
}
.container {
  display: flex;
  justify-content: center;
}
</style>
