<template>
  <div class="container-fluid">
    <div class="row">
      <h2 class="text-center mt-4">Use your credentials to login</h2>
      <form class="form w-50 m-auto mt-4" method="POST" v-on:submit.prevent="login()">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" v-model="user.userName" class="form-control">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="user.password" class="form-control">
        </div>
        <button class="btn btn-primary">Login</button>
      </form>
      <h2 v-if="message" class="text-danger text-center mt-3">{{ message }}</h2>
    </div>
  </div>
</template>
  
<script>
import Services from "../services/Services.js";
const service = new Services();

export default {
  name: "LoginComponent",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      message: "",
      token: "",
      status: ""
    }
  },
  methods: {
    login() {
      service.validateUser(this.user).then(response => {
        try {
          this.token = response;
          this.status = true;
          localStorage.setItem('token', this.token.response);
          service.setUser(this.user.username)
        } catch (error) {
          this.message = 'User or password incorrect';
          console.log(error);
        }
      });
    },
  },
  mounted() {
  }
}
</script>