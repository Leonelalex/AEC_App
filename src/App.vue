<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
<v-app id="app">

  <MainHeader />




      <v-container class="bg" fluid>
        <RouterView />
      </v-container>



  <MainFooter />
</v-app>
</template>

<style>
  .bg{

    height: 100vh;
  }
</style>
