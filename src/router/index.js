import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/shem',
    name: 'Shem',
    component: () => import('../views/Shem.vue')
  },
  {
    path: '/sprav',
    name: 'Sprav',
    component: function () {
      return import('../views/Sprav.vue')
    }
  },
  {
    path: '/shit/shem',
    redirect: '/shem'
  },
  {
    path: '/shit/sprav',
    redirect: '/sprav'
  },
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
