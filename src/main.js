import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Header from './components/Header.vue'
import HeaderAuth from './components/HeaderAuth.vue'
import NowAvailable from './components/NowAvailable.vue'
import Popular from './components/Popular.vue'
import TopRated from './components/TopRated.vue'

Vue.config.productionTip = false
Vue.component('Header', Header)
Vue.component('HeaderAuth',HeaderAuth)
Vue.component('NowAvailable', NowAvailable)
Vue.component('Popular', Popular)
Vue.component('TopRated', TopRated)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
