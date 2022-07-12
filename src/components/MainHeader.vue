<style>
    .bgHeader{
        padding: 0;
    }

    .logoContainer{
        padding: 15px;
    }
</style>

<template>
    <v-container fluid class="bgHeader">
        <div class="logoContainer">
            <v-row justify="center" align="center">
                <v-col cols="12" sm="2"><v-img src="/images/AECimage.png" height="150" width="300"></v-img></v-col>
                <v-col cols="12" sm="2"><v-img src="/images/ACSimage.png" height="150" width="300"></v-img></v-col>
                <v-col cols="12" sm="6"><h1>PRESIDENCIA DEL CONSEJO DE MINISTROS DE LA AEC</h1></v-col>
                <v-col cols="12" sm="2"><v-img src="/images/LogoMinex.png" width="300"></v-img></v-col>
            </v-row>
        </div>

        <v-app-bar color="#B7D0E1">
            
                <v-tabs align-with-title>
                <v-tab href="http://www.acs-aec.org/index.php?q=es">AEC</v-tab>
                <v-tab to="/presidencia">Presidencia Guatemala</v-tab>
                <v-tab to="/documentos">Documentos</v-tab>
                <v-tab to="/saladeprensa">Sala de Prensa</v-tab>
                <v-tab to="/agenda">Agenda y Actividades</v-tab>
                <v-tab  to="/ixcumbre">IX Cumbre Jefes de Estado</v-tab>
                </v-tabs>

        </v-app-bar>
    </v-container>
</template>
