import Vue from 'vue'
import VueRouter from 'vue-router'

import Authorization from '../views/Authorization.vue'
import MainPage from '../views/MainPage.vue'
import MyProfile from '../views/MyProfile.vue'
import TrainingPage from '../views/TrainingPage.vue'
import WorkSchedule from '../views/WorkSchedule.vue'

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
    },
    {
      path:'/myprofile',
      component: MyProfile
    },
    {
      path:'/training',
      component: TrainingPage
    },
    {
      path:'/workschedule',
      component: WorkSchedule
    }
  ]
})