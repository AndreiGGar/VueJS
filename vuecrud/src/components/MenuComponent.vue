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
              <router-link class="nav-link" to="/departments">Departments</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/departments/new">New Department</router-link>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Departments
              </a>
              <ul class="dropdown-menu">
                <li v-for="department in departments" :key="department">
                  <router-link :to="'/departments/' + department.nombre" class="dropdown-item">{{ department.nombre }}
                  </router-link>
                </li>
              </ul>
            </li> -->
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
      departments: [],
    }
  },
  methods: {
  },
  mounted() {
    service.getDepartments().then(result => {
      this.departments = result;
    });
  }
}
</script>
<style>

</style>