<template>
  <div id="header">
    <v-app-bar width="100%" fluid id="vApp">
      <v-app-bar-title class="ml-5">
        Movies in Your Life
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-title class="mr-5">
        Home
      </v-app-bar-title>
      <v-app-bar-title>
        <v-icon large color="blue" class="mr-5">
          mdi-account
        </v-icon>
      </v-app-bar-title>
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