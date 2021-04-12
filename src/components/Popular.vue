<template>
  <div id="popular">
    <h1 class="header-title mt-5">Popular</h1>
    <v-pagination :length="10" total-visible="7" v-model="page"
    @input="pageTransition">
    </v-pagination>
    <v-layout wrap justify-center>
    <v-card v-for="item in list" :key="item.title" max-width="300" class="mt-5 mx-auto">
      <v-card-title>
        <v-btn text max-width="250"   class="text-wrap font-weight-bold">
          {{item.title}}
        </v-btn>
        </v-card-title>
      <v-card-text>
        <v-img :src="'https://image.tmdb.org/t/p/w500' +item.img" height="200" contain>
        </v-img>
      </v-card-text>
      <v-rating v-model="item.rating" half-increments hover class="text-center mb-5"
      color="orange" readonly></v-rating>
      <p>{{item.rating}}</p>
    </v-card>
    </v-layout>
    <v-pagination :length="10" total-visible="7" v-model="page"
    @input="pageTransition">
    </v-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      list:[],
      page : 1
    }
  },
  methods:{
    pageTransition(){
      this.$router.replace(`/home/${this.page}`)
    },
    getmovies(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8c22a9322c82498433fb00700b530e92&language=ja-JP&page=' + this.page)
    .then(response=>{
      console.log(response)
      this.list = []
      for(let i = 0;i<response.data.results.length;i++){
        const movie= response.data.results[i]
        const data = {
          title : movie.title,
          id : movie.id,
          img : movie.poster_path,
          rating : "",
        }
        this.list.push(data)
      }
    })
    }
  },
  watch:{
    $route(){
      this.getmovies()
    }
  },
  async created(){
    this.getmovies()
  }
}
</script>

<style>

</style>