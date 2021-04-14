<template>
  <div id="topRated">
    <h1 class="header-title mt-5">
    Top Rated
    </h1>
    <v-layout wrap justify-center class="mb-10">
      <v-card   v-for="item in list" :key="item.title" max-width="300" class="mt-5 mb-10 mx-auto">
        <v-card-title>
          <v-btn text @click="toDetail(item.id)" class="font-weight-bold">
          {{item.title}}
          </v-btn>
        </v-card-title>
        <v-card-text>
        <v-img :src="'https://image.tmdb.org/t/p/w500' + item.img" height="200px"
            contain>
        </v-img>
        </v-card-text>
        <v-rating v-model="item.rating" 
        :key="item.title"
        class="text-center mb-5" half-increments color="orange" readonly>
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
      displayList : [],
      average : ""
    }
  },
  methods:{
    toDetail(id){
      this.$router.push({path:('/detail/' + id), params :id})
    },
    sort(a,b){
      a.average > b.average
    },
    async getReviewed(){
      axios.get('http://obscure-refuge-57581.herokuapp.com/api/reviewAll')
      .then(response=>{
        this.list = []
        console.log("a")
          for(let i = 0; i<response.data.data.length;i++){
          const movieId = response.data.data[i].movie_id 
          axios.get(`http://obscure-refuge-57581.herokuapp.com/api/review?movie_id=${movieId}`)
          .then(response=>{
            const average = parseFloat(response.data.data[response.data.data.length -1].average)
            console.log(`${i}つ目のアベレージ=${this.average}`)
              axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8c22a9322c82498433fb00700b530e92&language=ja-JP`)
              .then(response=>{
              const detail = {
              id : movieId,
              title : response.data.title,
              rating : average,
              img : response.data.poster_path
              }
              this.list.push(detail)
              console.log('push')
              })
              })
            
            }

      
          
      })
    },
  },
  async created(){
      const promise = new Promise((resolve)=>{
        const a = axios.get('http://obscure-refuge-57581.herokuapp.com/api/reviewAll')
        resolve(a)
      })
      promise.then((result)=>{
         this.list = []
          console.log("promise内の処理１")
            for(let i = 0; i<result.data.data.length;i++){
            const movieId = result.data.data[i].movie_id 
            const promise2 = new Promise((resolve)=>{
              const b= axios.get(`http://obscure-refuge-57581.herokuapp.com/api/review?movie_id=${movieId}`)
              resolve(b)
            })
            promise2.then((result)=>{
              const average = parseFloat(result.data.data[result.data.data.length -1].average)
              console.log(`これを待たない`)
              const promise3 = new Promise((resolve)=>{
                const c =axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8c22a9322c82498433fb00700b530e92&language=ja-JP`)
                resolve(c)
              })
              promise3.then((result)=>{
                const detail = {
                id : movieId,
                title : result.data.title,
                rating : average,
                img : result.data.poster_path
                }
                this.list.push(detail)
                console.log('push')
              }) 
                })
              }
            console.log('promise終了')
       }) 
       .then(()=>{
         this.list.sort(function(a,b){
            a.rating - b.rating
          })
            console.log(this.list)
            console.log('promise後の処理')
       })
  }
}
</script>

<style>

</style>