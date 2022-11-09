<template>
  <div>
    <h3 class="mt-3 mb-3">Departments</h3>
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
            <!-- <th>Edit</th>
            <th>Delete</th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ department.numero }}</td>
            <td>{{ department.nombre }}</td>
            <td>{{ department.localidad }}</td>
            <!-- <td><router-link class="btn btn-warning" :to="'/departments/edit/' + department.numero">Edit</router-link></td>
            <td><router-link class="btn btn-danger" :to="'/departments/delete/' + department.numero">Delete</router-link></td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container d-flex justify-content-center mt-3">
      <router-link class="btn btn-primary mx-2" :to="'/'">Home</router-link>
      <router-link class="btn btn-secondary mx-2" :to="'/departments'">Departments</router-link>
    </div>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'DetailsDeptComponent',
  data() {
    return {
      number: this.$route.params.number,
      department: {},
      status: false,
    }
  },
  methods: {
    
  },
  mounted() {
    service.getDepartment(this.number).then(result => {
      this.department = result;
      this.status = true;
    });
  }
}
</script>

<style>

</style>