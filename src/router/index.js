import Vue from 'vue'
import VueRouter from 'vue-router'

import Authorization from '../views/Authorization.vue'
import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      component: Authorization
    },
    {
      path:'/mainpage',
      component: MainPage
    }
  ]
})