<template>
  <div>
    <h3>Comics</h3>
    <div v-if="favoriteComic">
      <h3>Your favorite comic is: {{favoriteComic.titulo}}</h3>
      <img :src="favoriteComic.imagen" :title="favoriteComic.titulo" />
    </div><br/>
    <form v-on:submit.prevent="createComic">
      <label>Title: </label>
      <input type="text" v-model="comicForm.titulo" /><br /><br />
      <label>Image URL: </label>
      <input type="text" v-model="comicForm.imagen" /><br /><br />
      <label>Description: </label>
      <input type="text" v-model="comicForm.descripcion" /><br /><br />
      <label>Year: </label>
      <input type="text" v-model="comicForm.year" /><br /><br />
      <button>
        New Comic
      </button>
    </form>
    <div id="comics" v-for="comic in comics" :key="comic">
      <Comic :comic="comic" v-on:selectAsFavorite="selectAsFavorite" v-on:deleteComic="deleteComic"/>
    </div>
  </div>
</template>

<script>
import Comic from './ComicComponent.vue'
export default {
  name: 'ComicsComponent',
  components: {
    Comic,
  },
  methods: {
    createComic() {
      this.comics.push(this.comicForm);
      this.comicForm = {}
      // var data = this.comics;
      // data.push({
      //   title: this.title,
      //   image: this.image,
      //   desc: this.desc,
      //   year: this.year,
      // });
      // this.title = "";
      // this.image = "";
      // this.desc = "";
      // this.year = "";
    },
    selectAsFavorite(comic) {
      this.favoriteComic = comic;
    },
    deleteComic(comic) {
      this.comics.splice(this.comics.indexOf(comic), 1);
    }
  },
  data() {
    return {
      comics: [{
        titulo: "Spiderman",
        imagen:
          "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
        descripcion: "Hombre araña"
        , year: 1997
      },
      {
        titulo: "Wolverine",
        imagen:
          "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
        descripcion: "Lobezno"
        , year: 2003
      },
      {
        titulo: "Guardianes de la Galaxia",
        imagen:
          "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        descripcion: "Yo soy Groot"
        , year: 2006
      },
      {
        titulo: "Avengers",
        imagen:
          "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
        descripcion: "Los Vengadores"
        , year: 1993
      },
      {
        titulo: "Spawn",
        imagen:
          "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
        descripcion: "Al Simmons"
        , year: 2000
      },
      {
        titulo: "Batman",
        imagen:
          "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
        descripcion: "Murcielago"
        , year: 2001
      }],
      comicForm: {
        titulo: "",
        imagen: "",
        descripcion: "",
        year: 0
      },
      favoriteComic: ""
    }
  }
}
</script>

<style>

</style>