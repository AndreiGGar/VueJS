<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <Parent/> -->
  <!-- <ParentSum/> -->
  <Comics/>
</template>

<script>
// // import Parent from './components/ParentComponent.vue';
// import ParentSum from './components/ParentSumComponent.vue';
import Comics from './components/ComicsComponent.vue';

export default {
  name: 'App',
  components: {
    // Parent
    // ParentSum
    Comics
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
  margin-top: 60px;
}
</style>
