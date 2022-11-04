<template>
  <div>
    <h1>Router</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/multiplicationbtn">Multiplication by Btn</router-link></li>
        <li><router-link to="/multiplication">Multiplication</router-link></li>
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
</style>
