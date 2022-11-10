<template>
  <div>
    <h3 class="mt-4 mb-4">Characters</h3>
    <div class="mx-auto w-50">
      <router-link :to="'/series/' + id">
        <button class="btn btn-danger mb-4">Go Back</button>
      </router-link>
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Character</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="character in characters" :key="character.idPersonaje">
            <td>{{ character.nombre }}</td>
            <td><img :src=character.imagen :alt=character.nombre class="img-fluid" /></td>
            <td>
              <router-link class="btn btn-warning" :to="'/characters/update'">Update</router-link>
            </td>
            <td><button class="btn btn-danger" @click="deleteChar(character.idPersonaje)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Services from "../services/Services.js";
const service = new Services();
import Swal from "sweetalert2";

export default {
  name: 'CharactersComponent',
  data() {
    return {
      id: this.$route.params.id,
      characters: [],
      status: false,
    };
  },
  props: ['idDelete'],
  mounted() {
    this.getChars();
  },
  methods: {
    getChars() {
      service.getCharactersById(this.id).then(result => {
        this.characters = result;
        this.status = true;
      });
    },
    deleteChar(idDelete) {
      const bootstrapSwal = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-danger mx-2',
          cancelButton: 'btn btn-secondary mx-2'
        },
        buttonsStyling: false
      })
      bootstrapSwal.fire({
        title: 'Are you sure deleting the department with id: ' + idDelete + '?',
        text: "Changes cannot be reversed.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete',
        cancelButtonText: 'No, cancel',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          service.deleteChar(idDelete).then(() => {
            this.getChars();
          })
          Swal.fire(
            'Deleted!',
            'The department has been successfully deleted.',
            'success',
          )
        }
      })
    },
  },
}
</script>

<style>

</style>