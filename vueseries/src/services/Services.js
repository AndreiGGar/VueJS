import axios from "axios";
import Global from "../Global";

export default class Services {
  getSeries() {
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
  getSeriesById(id) {
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
  getCharacters() {
    return new Promise(function (resolve) {
      var request = "api/Personajes";
      var url = Global.urlApi + request;
      var characters = [];

      axios.get(url).then((response) => {
        characters = response.data;
        resolve(characters);
      });
    });
  }
  getCharactersById(id) {
    return new Promise(function (resolve) {
      var request = "api/Series/PersonajesSerie/" + id;
      var url = Global.urlApi + request;
      var characters = [];

      axios.get(url).then((response) => {
        characters = response.data;
        resolve(characters);
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
