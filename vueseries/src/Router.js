import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import Series from './components/SeriesComponent.vue'
import Characters from './components/CharactersComponent.vue'
import NewCharacter from './components/NewCharComponent.vue'
import UpdateCharacter from './components/UpdateCharComponent.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/series/:id', component:  Series},
  { path: '/characters/:id', component:  Characters},
  { path: '/characters/new', component:  NewCharacter},
  { path: '/characters/update', component:  UpdateCharacter},
  { path: '/characters/delete/:id', component:  Characters},
]

const router = createRouter({ history: createWebHistory(), routes })

export default router