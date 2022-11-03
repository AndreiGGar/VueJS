<template>
  <div class="hello">
    <h1>Hooks VUE</h1>
    <!-- <button v-on:click="changeMessage()">Change Message</button> -->
    <button @click="changeMessage()">Change Message</button>
    <h4>{{ message }}</h4>
  </div>
</template>

<script>
export default {
  name: 'LifeCicle',
  data() {
    return {
      message: 'Life Cicle Message',
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Life Cicle Message Changed';
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
