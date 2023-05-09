import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignView from '../views/SignView.vue'
import SignIn from '../views/SignIn.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/SignView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/SignIn.vue')
    }
  ]
})

export default router
