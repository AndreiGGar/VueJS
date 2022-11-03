<template>
  <div class="hello">
    <h3>Properties</h3>
    <!-- <div v-html="gamesCrimson"></div> -->
    <button @click="getGamesBlue()">Get Blue Elements</button>
    <div v-html="html"></div>
    <ul style="display: inline-block; padding: 0">
      <li v-for="game in gamesCrimson" :key="game" v-html="game">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PropertiesComponent',
  computed: {
    gamesCrimson() {
      var data = this.games;
      for (var i = 0; i < data.length; i++) {
        var game = data[i];
        game = "<span style='color: crimson'> " + game + "</span>";
        data[i] = game;
      }
      return data;
    }
  },
  data() {
    return {
      games: ["FIFA", "NBA", "ROCKET LEAGUE", "F1"],
      html: ""
    }
  },
  methods: {
    getGamesBlue() {
      var data = this.games;
      for (var i = 0; i < data.length; i++) {
        var game = data[i]
        this.html += "<h5 style='color: blue'> " + game + "</h5>";
      }
      return data;
    }
  }
}
</script>
