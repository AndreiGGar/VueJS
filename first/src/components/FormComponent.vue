<template>
  <div class="hello">
    <h1>Form</h1>
    <label for="number">Introduce Number: </label>
    <input type="number" id="number" v-model="number"><br /><br />
    <label for="name">Introduce Name: </label>
    <input type="text" id="name" v-model="name"><br /><br />
    <label for="age">Introduce Age: </label>
    <input type="number" id="age" v-model="age"><br/>
    <h4 v-if="number > 0">EEE</h4>
    <h4 v-else-if="number < 0">AAA</h4>
    <ul v-if="players.length > 0" style="display: inline-block; padding: 0">
      <li v-for="player in players" :key="player">
        {{ player }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      number: 0,
      name: "",
      age: 0,
      players: ["CR7", "D10S", "Messi", "Neymar", "Mbappe"],
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
