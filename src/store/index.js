import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios'
import router from "../router/index";
Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: {},
    auth: ""
  },
  mutations: {
    user(state, payload) {
      state.user = payload
    },
    auth(state, payload) {
      state.auth = payload
    }
  },
  actions: {
    login({ commit }, {email,password}) {
      axios.post('http://obscure-refuge-57581.herokuapp.com/api/login',{
        email : email,
        password : password
      })
      .then(response=>{
        console.log(response)
        commit('auth',response.data.auth)
        commit('user', response.data.data)
        if (this.state.auth === true) {
          router.push('/home/1')
        }
      })
    },
    logout({ commit,state }) {
      axios.post('http://obscure-refuge-57581.herokuapp.com/api/logout')
        .then(response => {
          commit('auth', response.data.auth)
          console.log(state.auth)
      })
    },
    review({ state ,dispatch},{movie_id,rating}){
      axios.post('http://obscure-refuge-57581.herokuapp.com/api/review',{
        user_id : state.user.id,
        movie_id : movie_id,
        content : rating
      })
      .then(response=>{
        console.log(response)
        dispatch('reload')
      })
      .catch(error=>{
        console.log(error)
      })
    },
    reload(){
      router.go({path: router.currentRoute.path, force: true})
    }
  },
  modules: {
  }
})
