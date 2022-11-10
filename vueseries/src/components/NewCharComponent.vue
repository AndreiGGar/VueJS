<template>
  <div>
    <h3 class="mt-3 mb-3">New Character</h3>
    <div class="container w-25 justify-content-center mt-4">
      <form method="POST" v-on:submit.prevent="newChar()">
        <div class="row"><label for="name">Name: </label></div>
        <div class="row mb-4"><input class="form-control" type="text" id="name" v-model="character.nombre"></div>
        <div class="row"><label for="image">Image: </label></div>
        <div class="row mb-4"><input class="form-control" type="text" id="image" v-model="character.imagen"></div>
        <div class="row"><label for="series">Series: </label></div>
        <div class="row mb-4">
          <select class="form-select" id="series" v-model="character.idSerie">
            <option v-for="serie in series" :key="serie.idSerie" :value="serie.idSerie">{{serie.nombre}}</option>
          </select>
        </div>
        <button class="btn btn-primary">New Series</button>
      </form>
    </div>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'NewCharComponent',
  data() {
    return {
      character: {
        idPersonaje: 0,
        nombre: '',
        imagen: '',
        idSerie: '',
      },
      series: [],
    }
  },
  methods: {
    newChar() {
      this.character.idSerie = parseInt(this.character.idSerie);
      service.newChar(this.character).then(() => {
        this.$router.push('/characters/' + this.character.idSerie);
      });
    }
  },
  mounted() {
    service.getSeries().then(result => {
      this.series = result;
      this.status = true;
    });
  }
}
</script>

<style>

</style>