<template>
  <div id="headerAuth">
    <v-app-bar color="#9575CD">
      <v-tool-bar-title class="ml-5" :style="width='300px'" width="300" id="title">
        Review Movies
      </v-tool-bar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="$router.push('/')">
        Sign In
      </v-btn>
      <v-btn text @click="$router.push('./signup')">
        Sign Up
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#title{
  width: 300px;
}
.header-title{
  width: 300px;
}
</style>