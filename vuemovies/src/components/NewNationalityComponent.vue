<template>
  <div>
    <h3 class="mt-3 mb-3">New Nationality</h3>
    <div class="container w-25 justify-content-center mt-4">
      <form method="POST" v-on:submit.prevent="newChar()">
        <div class="row"><label for="name">Name: </label></div>
        <div class="row mb-4"><input class="form-control" type="text" id="name" v-model="nationality.nombre"></div>
        <div class="row"><label for="image">Image: </label></div>
        <div class="row mb-4"><input class="form-control" type="text" id="image" v-model="nationality.imagen"></div>
        <button class="btn btn-primary">Create Nationality</button>
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
      nationality: {
        idNacionalidad: 0,
        nombre: '',
        bandera: '',
      },
    }
  },
  methods: {
    newNationality() {
      service.newNationality(this.nationality).then(() => {
        this.$router.push('/movies/nationalities/' + this.nationality.idNacionalidad);
      });
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>