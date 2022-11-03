<template>
  <div class="hello">
    <h3>Multiplication</h3>
    <input type="number" id="numberBox" v-model="numberBox"><br /><br />
    <button v-if="numberBox" @click="doMultiplication(numberBox)">Get Blue Elements</button><br/><br/>
    <div style="display: flex; justify-content: center;">
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Multiplication</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody v-html="html"></tbody>
      </table>
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
  methods: {
    doMultiplication(number) {
      this.html = "";
      for (var i = 1; i <= 10; i++) {
        this.html += "<tr><td style='color: blue'> " + number + "</td><td>" + i + "</td><td>" + number * i + "</td><tr>";
      }
    }
  }
}
</script>

<style>
table td, table th{
  border: 1px solid black;
}
</style>
