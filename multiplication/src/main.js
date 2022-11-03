import { createApp } from 'vue'
import App from './App.vue'
import router from './Router.js'

const app = createApp(App)
app.config.globalProperties.$filters = {
  getMultiplication(number, multiplier) {
    return number * multiplier;
  }
}
app.use(router).mount('#app')