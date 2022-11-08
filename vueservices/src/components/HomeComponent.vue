<template>
  <div>
    <h3>Home</h3>
    <h4>{{hello}}</h4>
  </div>
</template>

<script>
import Services from "../../services/Services.js";
const service = new Services();

export default {
  name: 'HomeComponent',
  data() {
    return {
      hello: '',
    };
  },
  mounted() {
    this.hello = service.getTry("Hello from Component Home");
  },
}
</script>
<style>

</style>