<template>
  <div>
    <h3 class="mt-3 mb-3">Departments</h3>
    <div class="container w-25 justify-content-center mt-4" v-if="status">
      <form method="POST" v-on:submit.prevent="updateDepartment()">
        <div class="row"><label for="number">Introduce Number: </label></div>
        <div class="row mb-4"><input class="form-control" type="number" id="number" v-model="department.numero" readonly></div>
        <div class="row"><label for="name">Introduce Name: </label></div>
        <div class="row mb-4"><input class="form-control" type="text" id="name" v-model="department.nombre"></div>
        <div class="row"><label for="location">Introduce Location: </label></div>
        <div class="row mb-4"><input class="form-control" type="text" id="location" v-model="department.localidad">
        </div>
        <router-link class="btn btn-primary mx-2" :to="'/departments/details/' + department.numero">Back</router-link>
        <button class="btn btn-success">Update Department</button>
      </form>
    </div>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'EditDeptComponent',
  data() {
    return {
      department: null,
      status: false,
      number: this.$route.params.number
    }
  },
  methods: {
    updateDepartment() {
      this.department.numero = parseInt(this.department.numero);
      service.updateDepartment(this.department).then(() => {
        this.$router.push('/departments/details/' + this.department.numero);
      });
    }
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