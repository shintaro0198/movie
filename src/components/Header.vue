<template>
  <div id="header">
    <v-app-bar width="100%" fluid id="vApp">
      <v-tool-bar-title class="ml-5">
        Review Movies
      </v-tool-bar-title>
      <v-spacer></v-spacer>
      <v-tool-bar-title class="mr-5">
        Home
      </v-tool-bar-title>
      <v-icon large color="blue" class="mr-5">
        mdi-account
      </v-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#header{
  color:blue;
  padding: none
  ;
}
#vApp{
  width: 100%;
}
</style>