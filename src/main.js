// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Vuetify from 'vuetify'

import VApp from 'vuetify/es5/components/VApp'
import FASignUp from './components/FASignUp.vue'
import FANav from './components/FANav.vue'
import FAFooter from './components/FAFooter.vue'
import FACashFlow from './components/planner/FACashFlow.vue'
import FAClientRow from './components/planner/FAClientRow.vue'

import('vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)

Vue.component('v-app', VApp)
Vue.component('fa-sign-up', FASignUp)
Vue.component('fa-nav', FANav)
Vue.component('fa-footer', FAFooter)
Vue.component('fa-cash-flow', FACashFlow)
Vue.component('fa-client-row', FAClientRow)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
