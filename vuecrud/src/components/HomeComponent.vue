<template>
  <div>
    <h3 class="mt-3 mb-3 text-danger">Home</h3>
    <div class="container">
      <img :src="image" alt="image" class="w-100" />
    </div>
  </div>
</template>

<script>
import image from '../assets/lewan.jpg'

export default {
  name: 'HomeComponent',
  data() {
    return {
      image: image
    }
  },
}
</script>
<style>

</style>