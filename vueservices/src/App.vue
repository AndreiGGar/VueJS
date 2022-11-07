<template>
  <!-- <Cars/> -->
  <!-- <Employers/> -->
  <Menu/>
  <router-view></router-view>
</template>

<script>
// import Cars from './components/CarsComponent.vue'
// import Employers from './components/EmployersDetails.vue'
import Menu from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    // Cars
    // Employers
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
