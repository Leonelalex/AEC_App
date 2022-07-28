<template>
  <v-container>
    <h2>{{title}}</h2>
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
</template>

<style scoped>
    h2{
        padding-bottom: 10px;
        color: #4E97D1;
    }
</style>

<script>

import { downloadFile } from '../utils/files';
import {mdiDownload} from '@mdi/js';

export default{
    data() {
        return {
            downloadIcon : mdiDownload,
            title: 'Calendario De Actividades Presidencia AEC'
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
                this.title = 'Calendario De Actividades Presidencia AEC';
            }
            if(lan == 'ENG'){
                this.title = 'Calendar Of Activities Presidency Of Guatemala ASC';
            }
            if(lan == 'FRN'){
                this.title = 'Calendrier Des Activities Presidence Guatemala AEC';
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