import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import EmployersJobs from './components/EmployersJobs.vue'
import EmployersDetails from './components/EmployersDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/details', component:  EmployersDetails},
  { path: '/jobs/:job', component: EmployersJobs }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router