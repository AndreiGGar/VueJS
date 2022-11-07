<template>
  <div>
    <h3>Employers Details</h3>
    <label>Select an employer: </label>
    <br />
    <form method="POST" v-on:submit.prevent="searchEmployers">
      <div class="row d-flex justify-content-center">
        <div class="w-25">
          <select class="form-select" v-model="idEmployer">
            <option v-for="employer in employers" :key="employer.idEmpleado" :value="employer.idEmpleado">
              {{ employer.apellido }}</option>
          </select>
          <br />
          <button class="btn btn-success">Search</button>
        </div>
      </div>
    </form><br />
    <div v-if="employer" class="row">
      <span><b>{{ "Id: "}}</b> {{employer.idEmpleado }}</span><br />
      <span><b>{{ "Surname: "}}</b> {{employer.apellido }}</span><br />
      <span><b>{{ "Job: "}}</b> {{employer.oficio }}</span><br />
      <span><b>{{ "Salary: "}}</b> {{employer.salario }}</span><br />
      <span><b>{{ "Department: "}}</b> {{employer.departamento }}</span><br />
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
      idEmployer: 0,
      employer: null
    }
  },
  methods: {
    loadEmployers() {
      var request = "api/Empleados";
      var url = Global.urlEmployers + request;
      axios.get(url).then(response => {
        this.employers = response.data;
      })
    },
    searchEmployers() {
      var request = "api/Empleados/" + this.idEmployer;
      var url = Global.urlEmployers + request;
      axios.get(url).then(response => {
        this.employer = response.data;
      })
    }
  },
  mounted() {
    this.loadEmployers();
  }
}
</script>

<style>

</style>