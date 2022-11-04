<template>
  <div>
    <h3>
      {{"Son number: " + number}}
    </h3>
    <button @click="sumNumbers()">
      Sum {{number}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SonSumComponent',
  data() {
    return {
      sum: 0,
    }
  },
  props: [
    'number'
  ],
  methods: {
    sumNumbers() {
      this.$emit('parentMethod', this.number)
    }
  }
}
</script>

<style>
</style>