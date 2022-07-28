<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default{
  created(){
    localStorage.setItem('Lan', 'ESP');
  }
}
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
    background-image: url("/images/MainBackground.svg");
    background-size: cover;
    height: 90%;
  }
</style>
