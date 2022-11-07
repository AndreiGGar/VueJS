import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import Comics from './components/ComicsComponent.vue'
import Sports from './components/ParentComponent.vue'
import DoubleNumber from './components/DoubleNumber.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/comics', component: Comics },
  { path: '/sports', component: Sports },
  { path: '/double', component: DoubleNumber },
  { path: '/double/:number', component: DoubleNumber }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router