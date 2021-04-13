<template>
  <div id="popular">
    <h1 class="header-title mt-5">Popular</h1>
    <v-pagination :length="10" total-visible="7" v-model="page"
    @input="pageTransition">
    </v-pagination>
    <v-layout wrap justify-center>
    <v-card v-for="item in list" :key="item.title" max-width="300" class="mt-5 mb-5 mx-auto">
      <v-card-title>
          <v-btn text @click="toDetail(item.id)" class="font-weight-bold">
          {{item.title}}
          </v-btn>
        </v-card-title>
      <v-card-text>
        <v-img :src="'https://image.tmdb.org/t/p/w500' +item.img" height="200" contain>
        </v-img>
      </v-card-text>
      <v-rating v-model="item.rating" half-increments hover class="text-center mb-5"
      color="orange" readonly></v-rating>
    </v-card>
    </v-layout>
    <v-pagination :length="10" total-visible="7" v-model="page"
    @input="pageTransition" class="mt-5 mb-10">
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
    toDetail(id){
      this.$router.push({path:('/detail/' + id), params :id})
    },
    getmovies(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8c22a9322c82498433fb00700b530e92&language=ja-JP&page=' + this.page)
    .then(response=>{
      this.list = []
      for(let i = 0;i<response.data.results.length;i++){
        const movie= response.data.results[i]
        axios.get(`http://obscure-refuge-57581.herokuapp.com/api/review?movie_id=${movie.id}`)
        .then(response=>{
            let sum= 0
            for(let i = 0;i<response.data.data.length;i++){
              sum += parseFloat(response.data.data[i].content)
            }
            this.average = sum/response.data.data.length
            const data = {
              title : movie.title,
              id : movie.id,
              rating : this.average,
              img : movie.poster_path,
            }
            this.list.push(data)
        })     
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