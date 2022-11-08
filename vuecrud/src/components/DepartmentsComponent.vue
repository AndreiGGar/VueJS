<template>
  <div>
    <h3 class="mt-3 mb-3">Details</h3>
    <div v-if="!status">
      <img src="../assets/newloading.gif" alt="loading" />
    </div>
    <div class="container d-flex justify-content-center mt-4">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Location</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="department in departments" :key="department.numero">
            <td>{{ department.numero }}</td>
            <td>{{ department.nombre }}</td>
            <td>{{ department.localidad }}</td>
            <td><router-link class="btn btn-secondary" :to="'/departments/details/' + department.numero">Details</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'DepartmentsComponent',
  data() {
    return {
      departments: [],
      status: false
    }
  },
  methods: {
  },
  mounted() {
    service.getDepartments().then(result => {
      this.departments = result;
      this.status = true;
    });
  }
}
</script>

<style>

</style>