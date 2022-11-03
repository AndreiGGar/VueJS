<template>
  <div class="hello">
    <h1>Hey New</h1>
    <h4>Name is {{name}}</h4>
    <img src="../assets/logo.png" alt="Vue logo">
  </div>
</template>

<script>
export default {
  name: 'HeyVue',
  data() {
    return {
      name: "Marcus",
      number: "67",
      theArray: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: crimson;
}
@import "../assets/css/style.css";
</style>
