<template>
  <div id="NowAvailable">
    <h1 class="header-title mt-5 "> Now Playing</h1>
    <v-layout wrap justify-center>
      <v-card v-for="item in list" :key="item.title" max-width="300" class="mt-5 mx-auto">
        <v-card-title>
          <v-btn text @click="toDetail(item.id)">
          {{item.title}}
          </v-btn>
        </v-card-title>
        <v-card-text >
            <v-img :src="'https://image.tmdb.org/t/p/w500' + item.img" height="200px"
            contain>
            </v-img>
        </v-card-text>
        <v-rating 
        :id="item"
         v-model="item.rating" half-increments :length="5" hover class="mx-auto text-center" 
        :key="item.title">
        </v-rating>
        <p>{{item.rating}}</p>
        <v-row>
          <v-col class="text-center">
            <v-btn class="mr-5" color="cyan">Share</v-btn>
            <v-btn color="primary">Close</v-btn>
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
    return{
      list : [],
    }
  },
  methods:{
    toDetail(id){
      this.$router.push({name : 'Detail', params :id})
    }
  },
  async created(){
    await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8c22a9322c82498433fb00700b530e92&language=en-US&page=1')
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

<style scoped>
.header-title{
  font-size: 25px;
  text-align: center;
}
</style>