<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light" style="padding: 0">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/Stranger-Things-Logo.png" alt="logo" style="width: 130px; height: 80px;" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Genres
              </a>
              <ul class="dropdown-menu">
                <li v-for="genre in genres" :key="genre">
                  <router-link :to="'/movies/genres/' + genre.idGenero" class="dropdown-item">{{ genre.nombre }}
                  </router-link>
                </li>
                <hr />
                <router-link :to="'/movies/genres/new'" class="dropdown-item">New Genre</router-link>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Nationalities
              </a>
              <ul class="dropdown-menu">
                <li v-for="nationality in nationalities" :key="nationality">
                  <router-link :to="'/movies/nationalities/' + nationality.idNacionalidad" class="dropdown-item">
                    {{ nationality.nombre }}
                    <img :src=nationality.bandera alt="flag" style="width: 22px; height: 15px;" />
                  </router-link>
                </li>
                <hr />
                <router-link :to="'/movies/nationalities/new'" class="dropdown-item">New Nationality</router-link>
              </ul>
            </li>
            <form class="d-flex" role="search" style="margin-left: 1.5em;">
              <input class="form-control me-2" type="search" placeholder="Insert Text" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'MenuComponent',
  data() {
    return {
      genres: [],
      nationalities: [],
    }
  },
  methods: {
  },
  mounted() {
    service.getGenres().then(result => {
      this.genres = result;
    });
    service.getNationalities().then(result => {
      this.nationalities = result;
    });
  }
}
</script>
<style>

</style>