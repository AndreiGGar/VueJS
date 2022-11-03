<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HeyVue/> -->
  <!-- <HomeComponent/>
  <MusicComponent/>
  <CinemaComponent/> -->
  <MenuComponent/>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HeyVue from './components/Hey.vue';
// import HomeComponent from './components/HomeComponent.vue';
// import MusicComponent from './components/MusicComponent.vue';
// import CinemaComponent from './components/CinemaComponent.vue';
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    // HomeComponent, MusicComponent, CinemaComponent
    MenuComponent
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
