<script>

import { downloadFile } from '../utils/files';
import {mdiDownload} from '@mdi/js';

export default{
    data() {
        return {
            downloadIcon : mdiDownload,
            title1: 'Plan de Trabajo Guatemala 2022-2023',
            title2: 'Plan de Acción AEC 2022-2028',
            title3: 'Logros'

        }
    },
    created() {
        this.changeLan(localStorage.getItem('Lan'));
    },
    methods: {
        async downloadDocs(fileName){
            const url = '/documents/' + fileName + '.pdf';
            downloadFile(url, fileName);
        },
        changeLan(lan){
            if(lan == 'ESP'){
                this.title1 = 'Plan de Trabajo Guatemala 2022-2023';
                this.title2 = 'Plan de Acción AEC 2022-2028';
                this.title3 = 'Logros';
            }
            if(lan == 'ENG'){
                this.title1 = 'Work Plan Presidency Of Guatemala AEC';
                this.title2 = 'Plan of Action ACS 2022-2028';
                this.title3 = 'Achivements';
            }
            if(lan == 'FRN'){
                this.title1 = 'Plan De Travail Presidence Par Le Guatemala AEC';
                this.title2 = "Plan D'Action AEC 2022-2028";
                this.title3 = 'Résultats';
            }
        }
    },
    mounted() {
        this.$root.$on('changeLan', (lan) =>{
            this.changeLan(lan);
        })
    },
};
</script>

<template>
        <v-container>

            <v-container class="mb-8">
                <v-row class="mb-2">
                    <h2>{{title1}}</h2>
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
                    <h2>{{title2}}</h2>
                </v-row>

                <v-row>
                    <v-col @click="downloadDocs('Plan_de_Accion')" cols="4"> 
                        <v-card min-height="100px" hover>
                            <v-card-title>Plan de Acción</v-card-title>
                            <v-card-subtitle>Español</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col @click="downloadDocs('PLAN_OF_ACTION_2022_2028')" cols="4"> 
                        <v-card min-height="100px" hover>
                            <v-card-title>Plan Of Action</v-card-title>
                            <v-card-subtitle>English</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col @click="downloadDocs('PLAN_DACTION_2022_2028')" cols="4"> 
                        <v-card min-height="100px" hover>
                            <v-card-title>Plan D'Action</v-card-title>
                            <v-card-subtitle>Français</v-card-subtitle>
                            <v-card-actions><v-icon>{{downloadIcon}}</v-icon></v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-container class="mb-8">
                <v-row class="mb-2">
                    <h2>{{title3}}</h2>
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