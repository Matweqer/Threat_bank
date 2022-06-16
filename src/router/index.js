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
    component: Views.AuthView
  },
  {
    path: '/services',
    name: 'services',
    component: Views.ServicesView
  },
  {
    path: '/threats-bank',
    name: 'threats',
    component: Views.ThreatsView
  },
  // {
  //   path: '/*',
  //   redirect: '/error',
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: Views.NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
