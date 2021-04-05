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
          <v-text-field v-model="password" label="password" prepend-icon="mdi-lock">
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-row>
        <v-col class="text-right">
        <v-btn class="mr-5">
          Sign Up
        </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>