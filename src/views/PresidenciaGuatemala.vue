<script>

import { downloadFile } from '../utils/files';
import {mdiDownload} from '@mdi/js';

export default{
    data() {
        return {downloadIcon : mdiDownload}
    },
    methods: {
        async downloadDocs(fileName){
            const url = '/documents/' + fileName + '.pdf';
            downloadFile(url, fileName);
        }
    },
};
</script>

<template>
        <v-container>

            <v-container class="mb-8">
                <v-row class="mb-2">
                    <h2>Plan de Trabajo Guatemala 2022-2023</h2>
                </v-row>

                <v-row>
                    <v-col @click="downloadDocs('PLAN_DE_TRABAJO_PRESIDENCIA_AEC')" cols="4"> 
                        <v-card min-height="100px" hover>
                            <v-card-title>Plan De Trabajo Presidencia AEC</v-card-title>
                            <v-card-subtitle>Español</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col @click="downloadDocs('WORK_PLAN_PRESIDENCY_OF_GUATEMALA_AEC')" cols="4"> 
                        <v-card min-height="100px" hover>
                            <v-card-title>Work Plan Presidency Of Guatemala AEC</v-card-title>
                            <v-card-subtitle>English</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col @click="downloadDocs('PLAN_DE_TRAVAIL_PRESIDENCE_PAR_LE_GUATEMALA_AEC')" cols="4"> 
                        <v-card min-height="100px" hover>
                            <v-card-title>Plan De Travail Presidence Par Le Guatemala AEC</v-card-title>
                            <v-card-subtitle>Français</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-container class="mb-8">
                <v-row class="mb-2">
                    <h2>Plan de Acción AEC 2022-2028</h2>
                </v-row>

                <v-row>
                    <v-col @click="downloadDocs('CALENDARIO_DE_ACTIVIDADES_PRESIDENCIA_AEC')" cols="4"> 
                        <v-card min-height="100px" hover>
                            <v-card-title>Calendario De Actividades Presidencia AEC</v-card-title>
                            <v-card-subtitle>Español</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col @click="downloadDocs('CALENDAR_OF_ACTIVITIES_PRESIDENCY_OF_GUATEMALA_ASC')" cols="4"> 
                        <v-card min-height="100px" hover>
                            <v-card-title>Calendar Of Activities Presidency Of Guatemala ASC</v-card-title>
                            <v-card-subtitle>English</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col @click="downloadDocs('CALENDRIER_DES_ACTIVITIES_PRESIDENCE_GUATEMALA_AEC')" cols="4"> 
                        <v-card min-height="100px" hover>
                            <v-card-title>Calendrier Des Activities Presidence Guatemala AEC</v-card-title>
                            <v-card-subtitle>Français</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-container class="mb-8">
                <v-row class="mb-2">
                    <h2>Logros</h2>
                </v-row>

                <v-row>
                    <v-col @click="downloadDocs('LOGROS_PPT_GUATEMALA')" cols="4">
                        <v-card min-height="100px" hover>
                            <v-card-title>Logros PPT Guatemala</v-card-title>
                            <v-card-subtitle>Español</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card> 
                    </v-col>
                    <v-col @click="downloadDocs('ACHIEVEMENTS_PPT_OF_GUATEMALA')" cols="4">
                        <v-card min-height="100px" hover>
                            <v-card-title>Achivements PPT Of Guatemala</v-card-title>
                            <v-card-subtitle>English</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card> 
                    </v-col>
                    <v-col @click="downloadDocs('RESULTATS_ESCOMPTES_PRESIDENCE_GUATEMALA_AEC')" cols="4">
                        <v-card min-height="100px" hover>
                            <v-card-title>Résultats Escomptés Presidence Guatemala</v-card-title>
                            <v-card-subtitle>Français</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>  
                    </v-col>
                </v-row>
            </v-container>

        </v-container>
</template>

<style scoped>
    h2{
        color: #4E97D1
    }
</style>