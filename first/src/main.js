import { createApp } from 'vue'
import App from './App.vue'
import router from './Router.js'

const app = createApp(App)
app.config.globalProperties.$filters = {
  mayus(data) {
    return data.toUpperCase();
  },
  getDoubleNumber(data) {
    return data * 2;
  }
}
app.use(router).mount('#app')