import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('../views/Home.vue')
    }
  },
  {
    path: '/shem',
    name: 'Shem',
    component: function () {
      return import('../views/Shem.vue')
    }
  },
  {
    path: '/sprav',
    name: 'Sprav',
    component: function () {
      return import('../views/Sprav.vue')
    }
  },
  ,
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
