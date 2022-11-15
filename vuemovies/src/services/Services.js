import axios from "axios";
import Global from "../Global";

export default class Services {
  getMovies() {
    return new Promise(function (resolve) {
      var request = "api/Series";
      var url = Global.urlApi + request;
      var series = [];

      axios.get(url).then((response) => {
        series = response.data;
        resolve(series);
      });
    });
  }
  getMoviesById(id) {
    return new Promise(function (resolve) {
      var request = "api/Series/" + id;
      var url = Global.urlApi + request;
      var series = {};

      axios.get(url).then((response) => {
        series = response.data;
        resolve(series);
      });
    });
  }
  getGenres() {
    return new Promise(function (resolve) {
      var request = "api/Generos";
      var url = Global.urlApi + request;
      var genres = [];

      axios.get(url).then((response) => {
        genres = response.data;
        resolve(genres);
      });
    });
  }
  getNationalities() {
    return new Promise(function (resolve) {
      var request = "api/Nacionalidades";
      var url = Global.urlApi + request;
      var nationalities = [];
      
      axios.get(url).then((response) => {
        nationalities = response.data;
        resolve(nationalities);
      });
    });
  }
  newChar(character) {
    return new Promise(function (resolve) {
      var request = "api/Personajes";
      var url = Global.urlApi + request;

      axios.post(url, character).then((response) => {
        resolve(response);
      });
    });
  }
  newGenre(genre) {
    return new Promise(function (resolve) {
      var request = "api/Generos";
      var url = Global.urlApi + request;
      
      axios.post(url, genre).then((response) => {
        resolve(response);
      });
    });
  }
  newNationality(nationality) {
    return new Promise(function (resolve) {
      var request = "api/Nacionalidades";
      var url = Global.urlApi + request;
      
      axios.post(url, nationality).then((response) => {
        resolve(response);
      });
    });
  }
  updateChar(idChar, idSerie) {
    return new Promise(function (resolve) {
      var request = "api/Personajes/" + idChar + "/" + idSerie;
      var url = Global.urlApi + request;

      axios.put(url).then((response) => {
        resolve(response);
      });
    });
  }
  deleteChar(id) {
    return new Promise(function (resolve) {
      var request = "api/Personajes/" + id;
      var url = Global.urlApi + request;

      axios.delete(url).then((response) => {
        resolve(response);
      });
    });
  }
}
