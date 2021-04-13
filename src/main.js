import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Header from './components/Header.vue'
import HeaderAuth from './components/HeaderAuth.vue'
import NowPlaying from './components/NowPlaying.vue'
import Popular from './components/Popular.vue'
import TopRated from './components/TopRated.vue'

Vue.config.productionTip = false
Vue.component('Header', Header)
Vue.component('HeaderAuth',HeaderAuth)
Vue.component('NowPlaying', NowPlaying)
Vue.component('Popular', Popular)
Vue.component('TopRated', TopRated)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
