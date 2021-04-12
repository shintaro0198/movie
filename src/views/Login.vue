<template>
  <div id="login">
    <HeaderAuth></HeaderAuth>
    <v-card>
      <v-card-title>
        Sign In
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" 
          label="email" prepend-icon="mdi-email">
          </v-text-field>
          <v-text-field v-model="password" label="password" 
          :type="show?'password' : 'text'"
          :append-icon="show?'mdi-eye' : 'mdi-eye-off'"
           prepend-icon="mdi-lock"
           @click:append="show = !show">
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-row>
        <v-col class="text-right">
        <v-btn class="mr-5" @click="login">
          Sign In
        </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email : "",
      password : "",
      show : true
    }
  },
  methods:{
    async login(){
      await this.$store.dispatch('login',{
        email : this.email,
        password : this.password
      })
    }
  }
}
</script>

<style>

</style>