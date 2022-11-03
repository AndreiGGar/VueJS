import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import Music from  './components/MusicComponent.vue'
import Cinema from './components/CinemaComponent.vue'

const routes = [
  {
    path: '/', component: Home,
  },{
    path: '/music', component: Music,
  }, 
  {
    path: '/cinema', component: Cinema,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;