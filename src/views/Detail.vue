<template>
  <div id="detail">
    <Header></Header>
    <v-card class="mb-5" dark>
      <v-layout justify-center>
        <v-card>
          <v-card-title class="text-h5">
            {{detail.title}}
          </v-card-title>
          <v-card>
            <v-card-text class="fontweight-bold">
            レビュー
            <span class="ml-3">
              {{average}}
            </span>
            </v-card-text>
          </v-card>
            <v-card>
            <v-card-text>
              コメント
            </v-card-text>
            <v-card-text>
              <v-virtual-scroll item-height="30" 
              height="30"
              :items="impressions">
              <template v-slot:default="{ item }">
                {{item}}
              </template>
              </v-virtual-scroll>
            </v-card-text>
            </v-card>
        </v-card>
        <v-card>
          <v-img :src="'https://image.tmdb.org/t/p/w500/' + detail.img" max-width=400px contain class="text-right">
          </v-img>
        </v-card>
      </v-layout>
    </v-card>
    <v-card class="mb-5" dark>
      <v-card-text>
        {{movie_id}}
      </v-card-text>
      <v-card-text 
      class="font-weight-bold">
      <v-card-title class="text-h6">
        制作会社
      </v-card-title>
        <v-layout>
          <v-flex md-4 v-for="company in detail.companies"
      :key="company">
            {{company}}
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-text class="font-weight-bold">
      公開年月
      <span class="ml-3">
        {{detail.date}}
      </span>
      </v-card-text>
    </v-card>
    <v-card class="mb-5">
      <v-card-title>
        レビュー
      </v-card-title>
      <v-rating v-model="rating" half-increments :length="5" hover 
      class="mx-auto text-center" color="orange">
      </v-rating>
      <v-row class="text-center">
        <v-col>
          <v-btn color="primary" @click="evaluation">
            レビュー
          </v-btn>
        </v-col>
      </v-row>
      <p>{{rating}}</p>
    </v-card>
    <v-card class="mb-5">
      <v-card-title>
        コメント
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-textarea type="text" v-model="comment">
          </v-textarea>
        </v-form>
      </v-card-text>
      <v-row class="text-center">
        <v-col>
          <v-btn color="primary" @click="commentPost">
            コメント
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return  {
      detail :{},
      comment : "",
      rating : null,
      average : "",
      impression : "",
      impressions :[],
      num:0
    }
  },
  methods:{
    evaluation(){
      this.$store.dispatch('review',{
        movie_id : this.movie_id,
        rating : this.rating
      })
    },
    commentPost(){
      axios.post('http://obscure-refuge-57581.herokuapp.com/api/comment',{
        user_id : this.$store.state.user.id,
        movie_id : this.movie_id,
        content : this.comment
      })
      .then(response=>{
        console.log(response)
        this.$store.dispatch('reload')
      })
      .catch(error=>{
        console.log(error)
      })
    },
    getDetails(){
      axios.get(`https://api.themoviedb.org/3/movie/${this.movie_id}?api_key=8c22a9322c82498433fb00700b530e92&language=ja-JP`)
    .then(response=>{
      console.log(response)
      
      this.detail= {
        title : response.data.title,
        companies : [],
        date :  response.data.release_date,
        img : response.data.poster_path
      }
      for(let i = 0;i<response.data.production_companies.length;i++){
        const company = response.data.production_companies[i].name
        this.detail.companies.push(company)
      }
    })
    },
    async getReview(){
      axios.get(`http://obscure-refuge-57581.herokuapp.com/api/review?movie_id=${this.movie_id}`)
      .then(response=>{
        console.log(response)
        let sum= 0
        for(let i = 0;i<response.data.data.length;i++){
          sum += parseFloat(response.data.data[i].content)
        }
        this.average = sum/response.data.data.length
        console.log(sum)
        console.log(this.average)
      })
    },
    getComments(){
      axios.get(`http://obscure-refuge-57581.herokuapp.com/api/comment?movie_id=${this.movie_id}`)
      .then(response=>{
        console.log(response)
        for(let i = 0; i<response.data.data.length;i++){
          this. impression =  response.data.data[i].content
          this.impressions.push(this.impression)
        }
        console.log(this.impressions)
      })
    },
    
  },
  props:['movie_id'],
  async created(){
    this.getDetails()
    await this.getReview()
     this.getComments()
    console.log(this.sum/1)
  }
  
}
</script>

<style>

</style>