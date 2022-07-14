<script>
import Noticias from '../components/Noticias.vue';
import Multimedia from '../components/Multimedia.vue';
    export default{
    data() {
        return {
            openSubpage: 1,
        };
    },
    methods: {
        changeSubpage(subpage) {
            this.openSubpage = subpage;
        }
    },
    components: { Noticias, Multimedia }
}
</script>

<template>

    <v-container>

        <v-tabs background-color="rgba(0,0,0,0)">
            <v-tab @click="changeSubpage(1)">Noticias</v-tab>
            <v-tab @click="changeSubpage(2)">Multimedia</v-tab>
        </v-tabs>


        <v-container class="innerPage">
            <Noticias v-if="openSubpage == 1" />
            <Multimedia v-if="openSubpage == 2" />
        </v-container>
    </v-container>
</template>

<style>

</style>