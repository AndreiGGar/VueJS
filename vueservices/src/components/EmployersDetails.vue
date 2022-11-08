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
      <span><b>{{ "Id: " }}</b> {{ employer.idEmpleado }}</span><br />
      <span><b>{{ "Surname: " }}</b> {{ employer.apellido }}</span><br />
      <span><b>{{ "Job: " }}</b> {{ employer.oficio }}</span><br />
      <span><b>{{ "Salary: " }}</b> {{ employer.salario }}</span><br />
      <span><b>{{ "Department: " }}</b> {{ employer.departamento }}</span><br />
    </div>
  </div>
</template>

<script>
import EmployersService from "../../services/EmployersServices.js";
const service = new EmployersService();

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
    searchEmployers() {
      service.searchEmployer(this.idEmployer).then(result => {
        this.employer = result;
      });
    }
  },
  mounted() {
    service.getEmployers().then(result => {
      this.employers = result;
    });
  }
}
</script>

<style>

</style>