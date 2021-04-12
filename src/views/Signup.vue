<template>
  <div id="signup">
    <HeaderAuth></HeaderAuth>
    <v-card>
      <v-card-title>
        Sign Up
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" 
          label="email" prepend-icon="mdi-email">
          </v-text-field>
          <v-text-field v-model="userName" label="user_name" prepend-icon="mdi-account">
          </v-text-field>
          <v-text-field v-model="password" label="password" 
          :type="show? 'password':'text'"
          :append-icon="show? 'mdi-eye' : 'mdi-eye-off'"
          prepend-icon="mdi-lock"
          @click:append="show=!show">
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-row>
        <v-col class="text-right">
        <v-btn class="mr-5" @click="signup">
          Sign Up
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
    return {
      userName: "",
      email :"",
      password : "",
      show:true
    }
  },
  methods:{
    signup(){
      axios.post('http://obscure-refuge-57581.herokuapp.com/api/register',{
        user_name : this.userName,
        email : this.email,
        password : this.password
      })
      .then(response=>{
        console.log(response)
        alert('アカウントを作成しました')
        this.$router.push('/')
      })
      .catch(error=>{
        alert(error)
      })
    }
  }
}
</script>

<style>

</style>