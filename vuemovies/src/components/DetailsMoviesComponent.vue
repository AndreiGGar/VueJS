<template>
  <div>
    <h3 class="mt-4 mb-4">Characters</h3>
    <div class="mx-auto w-50">
      <router-link :to="'/'">
        <button class="btn btn-danger mb-4">Go Home</button>
      </router-link>
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Image</th>
            <th>Youtube</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in movies" :key="movie.idPelicula">
            <td>{{ movie.titulo }}</td>
            <td><img :src=movie.foto :alt=movie.titulo class="img-fluid" /></td>
            <td>
              <a class="btn btn-danger" target="_blank" v-bind:href=movie.enlaceVideo>Enlace</a>
            </td>
            <td>
              <router-link class="btn btn-warning" :to="'/characters/update'">Details</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();
import Swal from "sweetalert2";

export default {
  name: 'DetailsMoviesComponent',
  data() {
    return {
      movies: [],
      statusGender: false,
      statusNationality: false,
    };
  },
  props: ['idDetails'],
  mounted() {
    if (this.$route.params.param === 'genres') {
      this.getMoviesByGenre();
    } else if (this.$route.params.param === 'nationalities') {
      this.getMoviesByNationality();
    }
  },
  watch: {
    '$route.params.param'(nextVal, oldVal) {
      if (nextVal != oldVal) {
        if (this.$route.params.param === 'genres') {
          this.getMoviesByGenre();
        } else if (this.$route.params.param === 'nationalities') {
          this.getMoviesByNationality();
        }
      }
    },
    '$route.params.id'(nextVal, oldVal) {
      if (nextVal != oldVal) {
        if (this.$route.params.param === 'genres') {
          this.getMoviesByGenre();
        } else if (this.$route.params.param === 'nationalities') {
          this.getMoviesByNationality();
        }
      }
    },
  },
  methods: {
    getMoviesByNationality() {
      service.getMoviesByNationality(this.$route.params.id).then((response) => {
        this.movies = response;
        this.statusNationality = true;
      });
    },
    getMoviesByGenre() {
      service.getMoviesByGenre(this.$route.params.id).then((response) => {
        this.movies = response;
        this.statusGender = true;
      });
    },
    getChars() {
      service.getCharactersById(this.id).then(result => {
        this.characters = result;
        this.status = true;
      });
    },
    deleteChar(idDelete) {
      const bootstrapSwal = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-danger mx-2',
          cancelButton: 'btn btn-secondary mx-2'
        },
        buttonsStyling: false
      })
      bootstrapSwal.fire({
        title: 'Are you sure deleting the department with id: ' + idDelete + '?',
        text: "Changes cannot be reversed.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete',
        cancelButtonText: 'No, cancel',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          service.deleteChar(idDelete).then(() => {
            this.getChars();
          })
          Swal.fire(
            'Deleted!',
            'The department has been successfully deleted.',
            'success',
          )
        }
      })
    },
  },
}
</script>

<style>

</style>