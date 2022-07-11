<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
<v-app id="app">

  <MainHeader />

  <v-main>
    <v-sheet>
      <v-container class="bg" fluid>
        <RouterView />
      </v-container>
    </v-sheet>
  </v-main>

  <MainFooter />
</v-app>
</template>

<style>
  .bg{
    background-image: url("/images/Background.png") ; 
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }
</style>
