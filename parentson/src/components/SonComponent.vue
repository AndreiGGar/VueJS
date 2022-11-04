<template>
  <div>
    <h3>
      {{name}}
    </h3>
    <button @click="selectAsFavorite()">
      Select as Favorite
    </button>
  </div>
</template>

<script>
export default {
  name: 'SonComponent',
  props: [
    'name'
  ],
  methods: {
    selectAsFavorite() {
      this.$emit('parentMethod', this.name)
    }
  }
}
</script>

<style>
</style>