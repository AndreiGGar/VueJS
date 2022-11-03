import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import Music from  './components/MusicComponent.vue'
import Cinema from './components/CinemaComponent.vue'
import LifeCicle from './components/LifeCicleComponent.vue'
import Form from './components/FormComponent.vue'
import Properties from './components/PropertiesComponent.vue'
import Filters from './components/FiltersComponent.vue'

const routes = [
  {
    path: '/', component: Home,
  },{
    path: '/music', component: Music,
  }, 
  {
    path: '/cinema', component: Cinema,
  }, 
  {
    path: '/lifecicle', component: LifeCicle,
  },
  {
    path: '/form', component: Form,
  },
  {
    path: '/properties', component: Properties,
  },
  {
    path: '/filters', component: Filters,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;