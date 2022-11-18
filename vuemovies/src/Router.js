import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import UpdateCharacter from './components/UpdateCharComponent.vue'
import NewGenre from './components/NewGenreComponent.vue'
import NewNationality from './components/NewNationalityComponent.vue'
import Movies from './components/MoviesComponent.vue'
import DetailsMovie from './components/DetailsMoviesComponent.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/movies/:param/:id', component:  Movies},
  { path: '/movies/:param/:id', component:  Movies},
  { path: '/genres/new', component:  NewGenre},
  { path: '/nationalities/new', component:  NewNationality},
  { path: '/movies/details/:id', component:  DetailsMovie},
  { path: '/characters/update', component:  UpdateCharacter},
  { path: '/characters/delete/:id', component:  Movies},
]

const router = createRouter({ history: createWebHistory(), routes })

export default router