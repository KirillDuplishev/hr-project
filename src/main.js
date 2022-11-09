import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router'
import fonts from './assets/fonts/fonts.scss'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  fonts,
  render: h => h(App)
}).$mount('#app')
