<template>
  <div>
    <h3>Character to Series</h3>
    <form method="POST" v-on:submit.prevent="updateChar()" class="w-50 mx-auto">
      <label>Select a series: </label>
      <select class="form-control form-select" v-model="parameters.idSerie" required v-on:change.prevent="getImgSeries">
        <option v-for="serie in series" :key="serie.idSerie" :value="serie.idSerie">{{ serie.nombre }}</option>
      </select><br />
      <label>Select a character: </label>
      <select class="form-control form-select" v-model="parameters.idPersonaje" required
        v-on:change.prevent="getImgChars">
        <option v-for="character in characters" :key="character.idPersonaje" :value="character.idPersonaje">
          {{ character.nombre }}</option>
      </select><br />
      <button class="btn btn-success">Save Changes</button>
      <hr />
    </form><br />
    <div class='row d-flex justify-content-center mx-auto w-50' v-if="imgSeries"><img class='w-100' :src=imgSeries /></div><br/><br/>
    <div class='row d-flex justify-content-center mx-auto w-50' v-if="imgChar"><img class='w-100' :src=imgChar /></div>
    <br /><br />
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'UpdateCharComponent',
  data() {
    return {
      series: [],
      characters: [],
      parameters: {
        idPersonaje: '',
        idSerie: '',
      },
      imgChar: '',
      imgSeries: '',
    }
  },
  methods: {
    updateChar() {
      service.updateChar(this.parameters.idPersonaje, this.parameters.idSerie).then(() => {
        this.$router.push('/characters/' + this.parameters.idSerie);
      });
    },
    getImgChars() {
      this.imgChar = this.characters[this.parameters.idPersonaje - 1].imagen;
    },
    getImgSeries() {
      this.imgSeries = this.series[this.parameters.idSerie - 1].imagen;
    },
  },
  mounted() {
    service.getSeries().then(result => {
      this.series = result;
    });
    service.getCharacters().then(result => {
      this.characters = result;
    });
  }
}
</script>

<style>

</style>