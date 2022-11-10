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
            <li class="nav-item">
              <router-link class="nav-link" to="/characters/new">New Character</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/characters/update">Update Characters</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Series
              </a>
              <ul class="dropdown-menu">
                <li v-for="serie in series" :key="serie">
                  <router-link :to="'/series/' + serie.idSerie" class="dropdown-item">{{ serie.nombre }}
                  </router-link>
                </li>
              </ul>
            </li>
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
      series: [],
    }
  },
  methods: {
  },
  mounted() {
    service.getSeries().then(result => {
      this.series = result;
    });
  }
}
</script>
<style>

</style>