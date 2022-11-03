import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import Multiplication from './components/MultiplicationButtonComponent.vue'

const routes = [
  {
    path: '/', component: Home,
  },{
    path: '/multiplication', component: Multiplication,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;