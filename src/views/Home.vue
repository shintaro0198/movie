<template>
  <div id="home">
    <Header></Header>
    <v-row>
      <v-col class="text-center">
        <v-btn text @click="onPage=1">Now playing</v-btn>
        <v-btn text @click="onPage=2">Popular</v-btn>
        <v-btn text @click="onPage=3">Movies</v-btn>
      </v-col>
    </v-row>
    <NowAvailable v-if="onPage==1"></NowAvailable>
    <Popular v-else-if="onPage==2"></Popular>
    <Movies v-else-if="onPage==3"></Movies>
  </div>
</template>

<script>

import Header from '../components/Header'
export default  {
  data(){
    return{
      onPage : 1
    }
  },
  components:{
    Header
  }
}
</script>

<style scoped>

</style>