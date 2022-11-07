<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
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
              <router-link class="nav-link" to="/details">Details</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Jobs
              </a>
              <ul class="dropdown-menu">
                <li v-for="job in jobs" :key="job">
                  <router-link :to="'/jobs/' + job" class="dropdown-item">{{ job }}</router-link>
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
import axios from 'axios';
import Global from '../Global';

export default {
  name: 'MenuComponent',
  data() {
    return {
      jobs: [],
    }
  },
  methods: {
    getJobs() {
      var request = "api/Empleados/oficios";
      var url = Global.urlEmployers + request;
      axios.get(url).then(response => {
        this.jobs = response.data;
      })
    },
  },
  mounted() {
    this.getJobs();
  }
}
</script>
<style>

</style>