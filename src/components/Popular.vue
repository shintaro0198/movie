<template>
  <div id="popular">
    <h1>Popular</h1>
    <v-layout wrap justify-center>
    <v-card v-for="item in list" :key="item.title" max-width="300" class="mt-5 mx-auto">
      <v-btn text class="text-wrap">
        {{item.title}}
      </v-btn>
      <v-img :src="'https://image.tmdb.org/t/p/w500' +item.img" height="200" contain></v-img>
      <v-rating v-model="item.rating" half-increments hover class="text-center"></v-rating>
      <v-row class="text-center mb-5">
        <v-col>
          <v-btn color="cyan" class="mr-5">share</v-btn>
          <v-btn color="primary">close</v-btn>
        </v-col>
      </v-row>
    </v-card>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      list:[],
    }
  },
  async created(){
    await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8c22a9322c82498433fb00700b530e92&language=ja-JP&page=1')
    .then(response=>{
      console.log(response)
      for(let i = 0;i<response.data.results.length;i++){
        const movie= response.data.results[i]
        const data = {
          title : movie.title,
          id : movie.id,
          img : movie.poster_path,
          rating : 4,
        }
        this.list.push(data)
      }
    })
  }
}
</script>

<style>

</style>