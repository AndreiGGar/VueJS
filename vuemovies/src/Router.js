import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import UpdateCharacter from './components/UpdateCharComponent.vue'
import NewGenre from './components/NewGenreComponent.vue'
import NewNationality from './components/NewNationalityComponent.vue'
import Movies from './components/MoviesComponent.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/movies/genres/:id', component:  Movies},
  { path: '/movies/nationalities/:id', component:  Movies},
  { path: '/genres/new', component:  NewGenre},
  { path: '/nationalities/new', component:  NewNationality},
  { path: '/characters/update', component:  UpdateCharacter},
  { path: '/characters/delete/:id', component:  Movies},
]

const router = createRouter({ history: createWebHistory(), routes })

export default router