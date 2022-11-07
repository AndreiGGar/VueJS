<template>
  <div>
    <h3 class="mt-4">Employers Details</h3>
    <div class="container d-flex justify-content-center mt-4">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Surname</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employer in employers" :key="employer.idEmpleado">
            <td>{{ employer.idEmpleado }}</td>
            <td>{{ employer.apellido }}</td>
            <td>{{ employer.oficio }}</td>
            <td>{{ employer.salario }}</td>
            <td>{{ employer.departamento }}</td>
          </tr>
        </tbody>
      </table>
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
      employers: [],
    }
  },
  methods: {
    loadEmployers() {
      var job = this.$route.params.job;
      var request = "api/Empleados/EmpleadosOficio/" + job;
      var url = Global.urlEmployers + request;
      axios.get(url).then(response => {
        this.employers = response.data;
      })
    },
  },
  mounted() {
    this.loadEmployers();
  },
  watch: {
    '$route.params.job'(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadEmployers();
      }
    }
  }
}
</script>

<style>

</style>