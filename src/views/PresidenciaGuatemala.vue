<script>

import {downloadFile} from '../utils/files.js';

export default{
    methods: {
        async downloadDocs(url, file){
            downloadFile(url, file);
        }
    },
};
</script>

<template>

    <v-container>

        <v-tabs background-color="rgba(0,0,0,0)">
            <v-tab>Plan de Trabajo Guatemala 2022-2023</v-tab>
            <v-tab>Plan de Acción AEC 2022-2028</v-tab>
            <v-tab>Logros</v-tab>
        </v-tabs>


        <v-container class="innerPage">
            <v-row>
                <h2>Plan de Trabajo Guatemala 2022-2023</h2>
                <v-list-item>
                <v-list-item-icon>
                    <v-icon role="img" aria-hidden="false"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-row>
            <v-row>
                <h2>Plan de Acción AEC 2022-2028</h2>
            </v-row>
            <v-row>
                <h2>Logros</h2>
            </v-row>
        </v-container>
    </v-container>
</template>

<style>

</style>