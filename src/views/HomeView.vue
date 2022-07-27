<script setup>
import Carousel from '@/components/MainCarousel.vue';
import Noticias from '@/components/Recientes.vue'
</script>

<template>
    <v-container>

      <Carousel />

      <div class="noticiasPanel">
        <Noticias />
      </div>

    </v-container>
</template>

<style>
  .noticiasPanel{
    padding-top: 20px;
  }
</style>
