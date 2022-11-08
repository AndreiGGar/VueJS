import axios from "axios";
import Global from "../Global";

export default class Services {
  getDepartments() {
    return new Promise(function (resolve) {
      var request = "api/Departamentos";
      var url = Global.urlDepartments + request;
      var departments = [];

      axios.get(url).then((response) => {
        departments = response.data;
        resolve(departments);
      });
    });
  }
  getDepartment(number) {
    return new Promise(function (resolve) {
      var request = "api/Departamentos/" + number;
      var url = Global.urlDepartments + request;
      var department = {};

      axios.get(url).then((response) => {
        department = response.data;
        resolve(department);
      });
    });
  }
  insertDepartment(department) {
    return new Promise(function (resolve) {
      var request = "api/Departamentos";
      var url = Global.urlDepartments + request;

      axios.post(url, department).then((response) => {
        resolve(response);
      });
    });
  }
  updateDepartment(department) {
    return new Promise(function (resolve) {
      var request = "api/Departamentos";
      var url = Global.urlDepartments + request;

      axios.put(url, department).then((response) => {
        resolve(response);
      });
    });
  }
  deleteDepartment(number) {
    return new Promise(function (resolve) {
      var request = "api/Departamentos/" + number;
      var url = Global.urlDepartments + request;

      axios.delete(url).then((response) => {
        resolve(response);
      });
    });
  }
}
