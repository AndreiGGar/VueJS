import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import Login from './components/LoginComponent.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router