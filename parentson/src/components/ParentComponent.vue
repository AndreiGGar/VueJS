<template>
  <div>
    <h3 v-if="this.text" v-html="text" style="margin-bottom: 0;"></h3>
    <ul style="display: inline-block; padding: 0;">
      <li v-for="sport in sports" :key="sport">
        <Son :name="sport" v-on:parentMethod="selectAsFavorite"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Son from './SonComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    Son
  },
  data() {
    return {
      sports: ['Football', 'Basketball', 'Baseball', 'Tennis', 'Volleyball'],
      text: ""
    }
  },
  methods: {
    selectAsFavorite(sport) {
      this.text = "";
      this.text = "Your favorite sport is: " + sport;
    }
  }
}
</script>

<style>

</style>