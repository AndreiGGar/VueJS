<template>
  <div>
    <h3 class="mt-3 mb-3">Departments</h3>
    <div class="container w-25 justify-content-center mt-4">
      <form method="POST" v-on:submit.prevent="insertDepartment()">
        <div class="row"><label for="number">Introduce Number: </label></div>
        <div class="row mb-4"><input class="form-control" type="number" id="number" v-model="department.numero"></div>
        <div class="row"><label for="name">Introduce Name: </label></div>
        <div class="row mb-4"><input class="form-control" type="text" id="name" v-model="department.nombre"></div>
        <div class="row"><label for="location">Introduce Location: </label></div>
        <div class="row mb-4"><input class="form-control" type="text" id="location" v-model="department.localidad">
        </div>
        <button class="btn btn-primary">New Department</button>
      </form>
    </div>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'InsertDeptComponent',
  data() {
    return {
      department: {
        numero: '',
        nombre: '',
        localidad: ''
      },
    }
  },
  methods: {
    insertDepartment() {
      this.department.numero = parseInt(this.department.numero);
      service.insertDepartment(this.department).then(() => {
        this.$router.push('/departments');
      });
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>