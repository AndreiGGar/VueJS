import { createApp } from "vue";
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import router from './Router.js'

var app = createApp(App);

// app.config.globalProperties.urlApi =
//   "https://apicochespaco.azurewebsites.net/";

app.use(router);

app.mount("#app");