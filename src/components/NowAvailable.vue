<template>
  <div id="NowAvailable">
    <h1 class="header-title mt-5 "> Now Playing</h1>
    <v-btn>{{page}}</v-btn>
    <v-pagination :length="10" total-visible="7" v-model="page"
    @input="pageTransition">
    </v-pagination>
    <v-layout wrap justify-center>
      <v-card v-for="item in list" :key="item.title" max-width="300" class="mt-5 mx-auto">
        <v-card-title>
          <v-btn text @click="toDetail(item.id)" class="font-weight-bold">
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
         v-model="item.rating" half-increments :length="5" hover class="mb-5 text-center" 
         color="orange"
        :key="item.title" readonly>
        </v-rating>
      </v-card>
    </v-layout>
    <v-pagination :length="10" total-visible="7" v-model="page"
    @input="pageTransition" class="mt-5">
    </v-pagination>
    <p>{{page}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      list : [],
      page : 1,
      average : "",
      num:1
    }
  },
  watch:{
    $route(){
      this.getMovies()
    }
  },
  methods:{
    toDetail(id){
      this.$router.push({path:('/detail/' + id), params :id})
    },
    pageTransition(){
      this.$router.replace(`/home/${this.page}`)
    },
    
    getMovies(){
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8c22a9322c82498433fb00700b530e92&language=ja-JP&page=' + this.page)
    .then(response=>{
      this.list = []
      console.log(response)
      for(let i = 0;i<response.data.results.length;i++){
        const movie= response.data.results[i]
        const review = axios.get(`http://obscure-refuge-57581.herokuapp.com/api/review?movie_id=${movie.id}`)
        .then(response=>{
            let sum= 0
            for(let i = 0;i<response.data.data.length;i++){
              sum += parseFloat(response.data.data[i].content)
            }
            this.average = sum/response.data.data.length
         
            console.log('reviewの処理')
            console.log(this.average)
        })
        review.then(function(){
               console.log('review後の処理')
               console.log(review)
               console.log(movie.id)
               console.log(this.average)
        const data = {
          title : movie.title,
          id : movie.id,
          rating : this.average,
          img : movie.poster_path,
        }
       console.log(data)
        this.list.push(data)
        })
        
      }
    })
    }
  },
  async created(){
   this.getMovies()
  }
}
</script>

<style scoped>

</style>