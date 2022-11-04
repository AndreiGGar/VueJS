import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import MultiplicationBtn from './components/MultiplicationButtonComponent.vue'
import Multiplication from './components/MultiplicationComponent.vue'

const routes = [
  {
    path: '/', component: Home,
  },
  {
    path: '/multiplication', component: Multiplication,
  },
  {
    path: '/multiplicationbtn', component: MultiplicationBtn,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;