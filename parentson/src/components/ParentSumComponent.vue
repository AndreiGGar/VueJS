<template>
  <div>
    <h3 v-if="this.text" v-html="text" style="color: crimson"></h3>
    <!-- <h3 v-if="this.text" style="color: crimson">The sum is: {{sum}}</h3> -->
    <button @click="newNumber()">
      New Random Number
    </button>
      <span v-for="number in numbers" :key="number" style="margin: 0;">
        <Son :number="number" v-on:parentMethod="sumNumbers"/>
      </span>
  </div>
</template>

<script>
import Son from './SonSumComponent.vue'

export default {
  name: 'ParentSumComponent',
  components: {
    Son
  },
  data() {
    return {
      numbers: [],
      sum: 0,
      text: "",
    }
  },
  methods: {
    newNumber() {
      var data = this.numbers;
      data.push(Math.floor(Math.random() * 100) + 1);
    },
    sumNumbers(number) {
      this.sum += number;
      this.text = "";
      this.text = "The sum is: " + this.sum;
    }
  }
}
</script>

<style>

</style>