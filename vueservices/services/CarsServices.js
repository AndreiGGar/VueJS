import axios from "axios";
import Global from "../src/Global";

export default class CarsService {
  getCars = new Promise(function (resolve) {
    var request = "webresources/coches";
    var url = Global.urlCars + request;
    var cars = [];
    axios.get(url).then((response) => {
      cars = response.data;
      resolve(cars);
    });
  });
}
