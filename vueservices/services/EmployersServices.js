import axios from "axios";
import Global from "../src/Global";

export default class EmployersService {
  getEmployers() {
    return new Promise(function (resolve) {
      var request = "api/empleados";
      var url = Global.urlEmployers + request;
      var employers = [];

      axios.get(url).then((response) => {
        employers = response.data;
        resolve(employers);
      });
    });
  }

  searchEmployer(idEmployer) {
    return new Promise(function (resolve) {
      var request = "api/empleados/" + idEmployer;
      var url = Global.urlEmployers + request;
      var employer = {};

      axios.get(url).then((response) => {
        employer = response.data;
        resolve(employer);
      });
    });
  }
}
