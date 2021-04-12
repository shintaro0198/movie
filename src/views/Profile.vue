<template>
  <div id="profile">
    <Header></Header>
    <v-card-title>
        Profile
      </v-card-title>
    <v-card dark>
      <v-img src="https://image.tmdb.org/t/p/w500/5JG8Hg0p5pFHyG36pYOrkR7GD44.jpg" height='300' contain>
      </v-img>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="3">
          <v-card-subtitle>
            Name
          </v-card-subtitle>
        </v-col>
        <v-col>
          <v-card-text>
            ころｎ
          </v-card-text>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="3">
          <v-card-subtitle>
            Favorite Movie
          </v-card-subtitle>
        </v-col>
        <v-col>
          <v-card-text>
            どろろ
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  imgStyle : 'img-style'
}
</script>

<style>

</style>