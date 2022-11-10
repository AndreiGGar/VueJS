<template>
  <div>
    <h3 class="mt-3 mb-3">Details</h3>
    <div v-if="!status" class="mw-100">
      <img src="../assets/newloading.gif" alt="loading" class="image" />
    </div>
    <div v-if="status" class="container d-flex justify-content-center mt-4">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Location</th>
            <th>Details</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="department in departments" :key="department.numero">
            <td>{{ department.numero }}</td>
            <td>{{ department.nombre }}</td>
            <td>{{ department.localidad }}</td>
            <td>
              <router-link class="btn btn-dark" :to="'/departments/details/' + department.numero">Details</router-link>
            </td>
            <td>
              <router-link class="btn btn-warning" :to="'/departments/edit/' + department.numero">Update</router-link>
            </td>
            <td><button class="btn btn-danger" @click="deleteDept(department.numero)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: 'DepartmentsComponent',
  data() {
    return {
      departments: [],
      department: null,
      status: false
    }
  },
  props: ['number'],
  methods: {
    getDepts () {
      service.getDepartments().then(result => {
        this.departments = result;
        this.status = true;
      });
    },
    deleteDept(number) {
      service.getDepartment(number).then(result => {
        this.department = result;
      });
      // Swal.fire({
      //   title: 'Are you sure deleting the department with number: ' + number + '?',
      //   text: "Changes cannot be reversed.",
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: 'crimson',
      //   cancelButtonColor: 'gray',
      //   confirmButtonText: 'Delete',
      //   reverseButtons: true,
      // })
      const bootstrapSwal = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-danger mx-2',
          cancelButton: 'btn btn-secondary mx-2'
        },
        buttonsStyling: false
      })
      bootstrapSwal.fire({
        title: 'Are you sure deleting the department with number: ' + number + '?',
        text: "Changes cannot be reversed.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete',
        cancelButtonText: 'No, cancel',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          service.deleteDepartment(number).then(() => {
            this.getDepts();
          })
          Swal.fire(
            'Deleted!',
            'The department has been successfully deleted.',
            'success',
          )
        }
      })
    }
  },
  mounted() {
    this.getDepts();
  }
}
</script>

<style>

</style>