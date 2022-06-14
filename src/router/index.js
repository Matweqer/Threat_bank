import { createRouter, createWebHistory } from 'vue-router'
import Views from "@/views";

const routes = [
  {
    path: '/',
    name: 'main',
    component: Views.HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: Views.HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Views.AuthView
  },
  {
    path: '/services',
    name: 'services',
    component: Views.ServicesView
  },
  {
    path: '/threats',
    name: 'threats',
    component: Views.ThreatsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
