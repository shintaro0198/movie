<template>
  <div id="home">
    <Header></Header>
    <p>{{$store.state.auth}}</p>
    <v-row>
      <v-col class="text-center">
        <v-btn text @click="attensiton=1">Now playing</v-btn>
        <v-btn text @click="attensiton=2">Popular</v-btn>
        <v-btn text @click="attensiton=3">Top Rated</v-btn>
      </v-col>
    </v-row>
    
    <NowPlaying :page='page'
    v-if="attensiton==1"></NowPlaying>
    <Popular :page='page'
    v-else-if="attensiton==2"></Popular>
    <TopRated :page='page'
    v-else-if="attensiton==3"></Toprated>
  </div>
</template>

<script>

import Header from '../components/Header'
export default  {
  
  data(){
    return{
      attensiton : 1,
      page:1
    }
  },
  props:['id'],
  components:{
    Header
  },
  methods:{
    
  },
  async created(){
    console.log(this.$store.state.auth)
  }
}
</script>

<style scoped>

</style>