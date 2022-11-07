<template>
  <div>
    <h3>Cars</h3>
    <div v-for="car in cars" :key="car.idcoche" class="row">
      <h4>{{ car.marca }}</h4>
      <h4>{{ car.modelo }}</h4>
      <h4>{{ car.conductor }}</h4>
      <div>
        <img :src="car.imagen" :title="car.marca" />
      </div>
      <div><br />
        <button @click="selectAsFavorite()">Select as Favorite</button><br /><br />
        <button @click="deleteCar()">Delete Car</button><br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Global from '../Global';

export default {
  name: "CarsComponent",
  data() {
    return {
      cars: []
    }
  },
  methods: {
    loadCars() {
      var request = "webresources/coches";
      var url = Global.urlApi + request;
      axios.get(url).then(response => {
        this.cars = response.data;
      })
    }
    // getCars() {
    //   fetch("http://localhost:3000/cars")
    //     .then(response => response.json())
    //     .then(data => {
    //       this.cars = data;
    //     });
    // },
    // deleteCar(car) {
    //   fetch("http://localhost:3000/cars/" + car.id, {
    //     method: "DELETE"
    //   }).then(response => {
    //     if (response.ok) {
    //       this.getCars();
    //     }
    //   });
    // }
  },
  mounted() {
    this.loadCars();
  }
}
</script>

<style>

</style>