import axios from "axios";
import Global from "../Global";

export default class Services {
  validateUser(user) {
    var json = JSON.stringify(user);
    var header = {
      "Content-Type": "application/json",
      responseType: "json",
    };

    return new Promise(function (resolve) {
      var request = "/Auth/Login";
      var url = Global.urlApi + request;

      axios.post(url, json, { headers: header }).then(
        (response) => {
          resolve(response.data);
        },
      ).catch((error) => {
        resolve(error);
      });
    });
  }

  getToken() {
    var token = localStorage.getItem("token");
    if (token != null) {
      return token;
    }
    return null;
  }

  deleteToken() {
    localStorage.clear();
  }

  setUser(User) {
    localStorage.setItem("user", User);
  }

  getUser() {
    let user = localStorage.getItem("user");
    if (user != null) {
      return user;
    } else {
      return null;
    }
  }

  getEmployers() {
    return new Promise(function (resolve) {
      var request = "api/Empleados";
      var url = Global.urlApi + request;
      var token = localStorage.getItem("token");
      const header = { Authorization: "bearer " + token };
      axios.get(url, { headers: header }).then((response) => {
        resolve(response.data);
      });
    });
  }

  getEmployerById(id) {
    return new Promise(function (resolve) {
      var request = "api/Empleados/" + id;
      var url = Global.urlApi + request;
      var token = localStorage.getItem("token");
      const header = { Authorization: "bearer " + token };
      var employer = {};

      axios.get(url, { headers: header }).then((response) => {
        employer = response.data;
        resolve(employer);
      });
    });
  }

  loadSubordinates() {
    return new Promise(function (resolve) {
      var request = "api/Empleados/Subordinados";
      var url = Global.urlApi + request;
      var token = localStorage.getItem("token");
      const header = { Authorization: "bearer " + token };

      axios.get(url, { headers: header }).then((res) => {
        resolve(res.data);
      });
    });
  }

  profileEmployer() {
    return new Promise(function (resolve) {
      var request = "api/Empleados/PerfilEmpleado";
      var url = Global.urlApi + request;
      var token = localStorage.getItem("token");
      const header = { Authorization: "bearer " + token };

      axios.get(url, { headers: header }).then((res) => {
        resolve(res.data);
      });
    });
  }
}
