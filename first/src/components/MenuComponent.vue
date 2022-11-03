<template>
  <div>
    <h1>Router</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cinema">Cinema</router-link></li>
        <li><router-link to="/music">Music</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav > ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
}
@import "../assets/css/style.css";
</style>
