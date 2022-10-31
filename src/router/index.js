import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/MainPage',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/',
    name: 'Authorization',
    component: () => import('../views/Authorization.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
