<template>
  <v-carousel cycle show-arrows-on-hover height="500">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/images/carrousel/carrousel1.svg',
          }
        ],
      }
    },
  }
</script>