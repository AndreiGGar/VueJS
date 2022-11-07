<template>
  <div>
    <br />
    <button @click="redirectHome">Go Home</button>
    <h3 v-if="double">Double Number: {{ double }}</h3>
    <h3 v-if="message">{{ message }}</h3>
  </diV>
</template>

<script>
export default {
  name: "DoubleNumber",
  mounted() {
    if (this.$route.params.number) {
      this.showDouble();
    } else {
      this.message = "No number provided";
    }
  },
  watch: {
    '$route.params.number'(params, oldParams) {
      if (params != oldParams) {
        this.showDouble()
      }
    }
  },
  data() {
    return {
      message: null,
      number: this.$route.params.number,
      double: 0
    };
  },
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
    showDouble() {
      this.double = parseInt(this.$route.params.number * 2);
    }

  }
}
</script>

<style>

</style>