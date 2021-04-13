<template>
  <div id="header">
    <v-app-bar width="100%" fluid id="vApp">
      <v-toolbar-title class="ml-5" :style="vTitle" :width="'300px'">
        Review Movies
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="mr-5" @click="$router.push('/home/1')">
          Home
      </v-btn>
      <v-btn text  class="mr-5">
        <v-icon large color="blue" @click="$router.push('/profile')">
          mdi-account
        </v-icon>
      </v-btn>
      <v-btn text @click="logout">
        logout
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      vTitle: 'vAppTitle'
    }
  },
  methods:{
    async logout(){
      await axios.post('http://obscure-refuge-57581.herokuapp.com/api/logout')
      .then(response => {
        this.$store.commit('auth', response.data.auth)
      })
      this.$store.dispatch('reload')
      
    }
  }
}
</script>

<style>
</style>