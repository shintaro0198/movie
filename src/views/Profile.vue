<template>
  <div id="profile">
    <Header></Header>
    <v-card-title>
        Profile
      </v-card-title>
    <v-card dark>
      <v-img src="https://image.tmdb.org/t/p/w500/5JG8Hg0p5pFHyG36pYOrkR7GD44.jpg" height='300' contain>
      </v-img>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-row >
        <v-col cols="3" >
          <v-card-text>
            ユーザーネーム
          </v-card-text>
        </v-col>
        <v-col cols="9">
          <v-card-text>
            {{$store.state.user.user_name}}
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-card-text>
            Favorite Movie
          </v-card-text>
        </v-col>
        <v-col cols="9">
          <v-card-text>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-card>
      <v-card-text>
        プロフィール変更
      </v-card-text>
      <v-form>
        <v-row>
          <v-col cols="3">
            <v-card-text>
              ユーザーネーム
            </v-card-text>
          </v-col>
          <v-col cols="6" class="text-left">
            <v-text-field v-model="userName">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-card-text>
              Favorite Movie
            </v-card-text>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="favoriteMovie">
            </v-text-field>
          </v-col>
          <v-col class="ml-10">
            <v-btn  color="primary" @click="change">
              変更
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      userName : this.$store.state.user.user_name,
      favoriteMovie : this.$store.state.user.favorite_movie
    }
  },
  methods:{
    change(){
      axios.post('http://obscure-refuge-57581.herokuapp.com/api/user',{
      id : this.$store.state.user.id,
      user_name : this.userName,
      favorite_movie : this.favoriteMovie
    })
    .then(response=>{
      this.$store.commit('user',response.data.data)
      alert('プロフィールが変更されました')
      this.$store.dispatch('reload')
    })
    }
  }
}

</script>

<style>

</style>