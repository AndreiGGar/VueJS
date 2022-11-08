import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomeComponent.vue'
import Departments from './components/DepartmentsComponent.vue'
import InsertDept from './components/InsertDeptComponent.vue'
import DetailsDept from './components/DetailsDeptComponent.vue'
import EditDept from './components/EditDeptComponent.vue'
import DeleteDept from './components/DeleteDeptComponent.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/departments', component:  Departments},
  { path: '/departments/new', component:  InsertDept},
  { path: '/departments/details/:number', component:  DetailsDept},
  { path: '/departments/edit/:number', component:  EditDept},
  { path: '/departments/delete/:number', component:  DeleteDept}
]

const router = createRouter({ history: createWebHistory(), routes })

export default router