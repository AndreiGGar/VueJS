<template>
  <div>
    <h3>{{ comic.titulo }}</h3>
    <h4>{{ comic.descripcion }}</h4>
    <h4 :class="{
      crimson: comic.year <= 2000,
      purple: comic.year > 2000
    }">{{ comic.year }}</h4>
    <img :src="comic.imagen" :title="comic.titulo" /><br/><br/>
    <button @click="selectAsFavorite()">Select as Favorite</button><br/><br/>
    <button @click="deleteComic()">Delete Comic</button>
  </div>
</template>

<script>
export default {
  name: 'ComicComponent',
  props: [
    'comic'
  ],
  methods: {
    selectAsFavorite() {
      this.$emit('selectAsFavorite', this.comic)
    },
    deleteComic() {
      this.$emit('deleteComic', this.comic)
    }
  }
}
</script>

<style>
@import url(../assets/css/comics.css);
</style>