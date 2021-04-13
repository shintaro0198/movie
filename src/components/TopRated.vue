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
        for(let i = 0; i<response.data.data.length;i++){
          const movieId = response.data.data[i].movie_id 
          const review = axios.get(`http://obscure-refuge-57581.herokuapp.com/api/review?movie_id=${movieId}`)
          .then(response=>{
            this.average = parseFloat(response.data.data[response.data.data.length -1].average)
            console.log(this.average)
            review.then(()=>{
              axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8c22a9322c82498433fb00700b530e92&language=ja-JP`)
              .then(response=>{
              const detail = {
              id : movieId,
              title : response.data.title,
              rating : this.average,
              img : response.data.poster_path
              }
              this.list.push(detail)
              console.log(detail.rating)
              })
            })
          })
        }
      })
    },
    /**同じ挙動をしているはずなのに、detail.ratingの中身が読み込むたびに、ずれる
     * 45行目のapi通信から送られてくるリストの中身のオブジェクトに,48から62行目までの処理を終えたら次のオブジェクトに同じ処理を順に進めてほしいが、直前のオブジェクトの処理の終了を待たずに次のオブジェクトの処理が始まりdetail.ratingにずれが生じている.
     * 
     */
  },
  async created(){
    const promise = new Promise(()=>{
      this.getReviewed()
    })
    promise.then(()=>{
        this.list.sort(function(a,b){
      a.average > b.average
    })
    }).then(()=>{
      console.log(this.list)

    /**定数を定義せず、
     * this.getReviewed()
     * .then(()=>{
     * this.list.sort~
     * console.log(this.list)})
     * と記述した場合はconsole.logは行われるがthis.getReviewedの処理を待たない。
     * awaitで記述した場合も同様に処理を待たずに実行される。
     * async created内に直接getReviewedの内容を記述した場合も同様。
     */
  })
}
}
</script>

<style>

</style>