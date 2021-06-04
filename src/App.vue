<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <router-link to="/index">index组件</router-link> -->
    <!-- <router-link to="/login">login组件</router-link> -->
    <!-- <router-view></router-view> -->
    <Index/>
  </div>
</template>

<script>
import Index from "./views/system/index"
export default {
  name: 'App',
  components: {
    Index,
  },
  data(){
    return{
      token:''
    }
  },
  mounted(){
    this.token = sessionStorage.getItem("token");
  }
}
</script>

<style scoped>
html,body{
  margin: 0;
  padding: 0;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
