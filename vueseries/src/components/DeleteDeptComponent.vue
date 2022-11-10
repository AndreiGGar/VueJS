<template>
  <div>
    <h3 class="mt-3 mb-3">Delete Department</h3>
    <div v-if="status">
      <h4 class="text-bg-danger text-center py-2">Are you sure of this action?</h4>
      <div class="container w-50 mt-4" v-if="status">
        <div class="row d-flex justify-content-center">
          <p class="text-white text-bg-dark w-75">ID: {{ department.numero }}; Nombre: {{ department.nombre }}; Localidad:
            {{ department.localidad }}</p>
        </div>
        <router-link class="btn btn-primary mx-2" :to="'/departments/details/' + department.numero">Back</router-link>
        <button class="btn btn-danger mx-2" v-on:click="deleteDepartment()">Delete Department</button>
      </div>
    </div>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'DeleteDeptComponent',
  data() {
    return {
      department: null,
      status: false,
      number: this.$route.params.number
    }
  },
  methods: {
    deleteDepartment() {
      this.number = parseInt(this.number);
      service.deleteDepartment(this.number).then(() => {
        this.$router.push('/departments');
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