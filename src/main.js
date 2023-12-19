import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import VueClazyLoad from 'vue-clazy-load'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import { routes } from './routes'
import messages from './content'

Vue.use(VueRouter)
Vue.use(VueClazyLoad)
Vue.use(VueScrollTo)
Vue.use(VueI18n)

const router = new VueRouter({
    history:false,
    routes: routes
})

const i18n = new VueI18n({
  locale: 'en',
  messages,
})

var vm = new Vue({
  el: '#toolkit-app',
  router,
  i18n,
  render: h => h(App)
})
