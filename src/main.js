import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Header from './components/Header.vue'
import HeaderAuth from './components/HeaderAuth.vue'
import NowAvailable from './components/NowAvailable.vue'

Vue.config.productionTip = false
Vue.component('Header', Header)
Vue.component('HeaderAuth',HeaderAuth)
Vue.component('NowAvailable',NowAvailable)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
