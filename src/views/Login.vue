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
          <v-text-field v-model="password" label="password" prepend-icon="mdi-lock">
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-row>
        <v-col class="text-right">
        <v-btn class="mr-5">
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
      password : ""
    }
  }
}
</script>

<style>

</style>