<template>
  <div class="hello">
    <h3>Multiplication</h3>
    <label for="number">Introduce Number: </label>
    <input type="number" id="numberBox" v-model="numberBox"><br /><br />
    <div v-if="numberBox || numberBox == '0'">
      <li v-for="number in getNumbers" :key="number">
        {{ "Number: " + parseInt(numberBox) + " * " + (number) + " = " + $filters.getMultiplication(parseInt(numberBox), number) }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiplicationComponent',
  computed: {
    getNumbers() {
      var data = this.numbers;
      for (var i = 1; i <= 10; i++) {
        data.push(i);
      }
      return data;
    }
  },
  data() {
    return {
      numbers: [],
      numberBox: 0,
      html: ""
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: crimson;
}
</style>
