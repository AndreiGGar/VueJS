<template>
  <div>
    <h3 class="mt-4 mb-4">Series</h3>
    <div class="row d-flex justify-content-center">
      <div class="card w-50 p-0">
        <div class="card-image-top">
          <img :src=series.imagen :alt=series.nombre class="w-100" />
        </div>
        <div class="card-body">
          <h5 class="card-title">
            {{ series.nombre }}
          </h5>
          <p class="card-text">IMDB: + {{ series.puntuacion }}</p>
          <router-link :to="'/characters/' + series.idSerie">
            <button class="btn btn-success w-100">Characters</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'SeriesComponent',
  methods: {
    getSeries() {
      service.getSeriesById(this.$route.params.id).then(result => {
        this.series = result;
        this.status = true;
      });
    }
  },
  data() {
    return {
      series: {},
      status: false,
    };
  },
  mounted() {
    this.getSeries();
  },
  watch: {
    '$route.params.id'(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.getSeries();
      }
    }
  },
}
</script>

<style>

</style>