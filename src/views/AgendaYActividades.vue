<template>
  <v-container>
    <h1>CALENDARIO DE ACTIVIDADES PRESIDENCIA AEC</h1>
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