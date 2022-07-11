<template>    
    <v-app-bar app color="#C1E3ED" >
        <h1 >PRESIDENCIA DEL CONSEJO DE MINISTROS DE LA AEC</h1>

        <template v-slot:extension>
            <v-tabs align-with-title>
            <v-tab href="http://www.acs-aec.org/index.php?q=es">AEC</v-tab>
            <v-tab to="/presidencia">Presidencia Guatemala</v-tab>
            <v-tab to="/documentos">Documentos</v-tab>
            <v-tab to="/saladeprensa">Sala de Prensa</v-tab>
            <v-tab to="/agenda">Agenda y Actividades</v-tab>
            <v-tab  to="/ixcumbre">IX Cumbre Jefes de Estado</v-tab>
            </v-tabs>
        </template>

    </v-app-bar>
</template>