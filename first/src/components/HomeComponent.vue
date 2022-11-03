<template>
  <div class="hello">
    <h1>Home</h1>
    <img src="../assets/logo.png" alt="Vue logo">
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
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
