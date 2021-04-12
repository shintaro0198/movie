<template>
  <div id="topRated">
    <h1 class="header-title mt-5">
    Top Rated
    </h1>
    <v-layout wrap justify-center>
      <v-card   v-for="item in list" :key="item.title" max-width="300" class="mt-5 mx-auto">
        <v-card-title>
          {{item.title}}
        </v-card-title>
        <v-card-text>
        <v-img :src="'https://image.tmdb.org/t/p/w500' + item.img" height="200px"
            contain>
        </v-img>
        </v-card-text>
        <v-rating v-model="item.rating" class="text-center mb-5" half-increments color="orange" readonly>
        </v-rating>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      list : [],
      displayList : []
    }
  },
  methods:{
    getReviewed(){
      axios.get('http://obscure-refuge-57581.herokuapp.com/api/reviewAll')
    .then(response=>{
      const movieList = response.data.data
        const filtered = movieList.filter(function(value,index,array){
          return array.indexOf(value) !== array.lastIndexOf(value)
        })
        console.log(movieList)
        console.log(filtered)
      for(let i = 0; i<response.data.data.length;i++){
        const movieId = response.data.data[i].movie_id 
        const review = response.data.data[i].content
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8c22a9322c82498433fb00700b530e92&language=ja-JP`)
        .then(response=>{
          const detail = {
            title : response.data.title,
            rating : review,
            img : response.data.poster_path
          }
          this.list.push(detail)
        })
        console.log(this.list)
      }
    })
    },
  },
  async created(){
    this.getReviewed()
  }
}
</script>

<style>

</style>