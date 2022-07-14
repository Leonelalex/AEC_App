<script>

import { downloadFile } from '../utils/files';
import {mdiDownload} from '@mdi/js';

export default{
    data() {
        return {downloadIcon : mdiDownload}
    },
    methods: {
        async downloadDocs(){
            console.log("descargando");
            downloadFile('/documents/pdf-test.pdf', 'test');
        }
    },
};
</script>

<template>
        <v-container>

            <v-row class="mb-6">
                <h2>Plan de Trabajo Guatemala 2022-2023</h2>
                <v-list-item @click="downloadDocs">
                    <v-list-item-icon>
                        <v-icon>{{downloadIcon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <h3>Plan de Trabajo</h3>
                    </v-list-item-content>
                </v-list-item>
            </v-row>
            
            
            <v-row class="mb-6">
                <h2>Plan de Acción AEC 2022-2028</h2>
                <v-list-item @click="downloadDocs">
                    <v-list-item-icon>
                        <v-icon>{{downloadIcon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <h3>Plan de Accion</h3>
                    </v-list-item-content>
                </v-list-item>
            </v-row>

            <v-row class="mb-6">
                <h2>Logros</h2>
                <v-list-item @click="downloadDocs">
                    <v-list-item-icon>
                        <v-icon>{{downloadIcon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <h3>Logros</h3>
                    </v-list-item-content>
                </v-list-item>
            </v-row>

        </v-container>
</template>

<style>

</style>