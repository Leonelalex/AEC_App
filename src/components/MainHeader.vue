<style>
    .bgHeader{
        padding: 0;
    }

    .logoContainer{
        background-image: url("/images/HeaderBackground.svg");
        background-size: cover;
        width: 100%;
        height: 175px;
    }

    h4{
        color: aliceblue;
    }
</style>

<template>
    <v-container fluid class="bgHeader">
        <div class="logoContainer">
            <v-row justify="center" align="center">

            </v-row>
        </div>

        <v-toolbar color="#1AA7EC">
            
                <v-tabs align-with-title>
                    <v-tab to="/"><h4>Inicio</h4></v-tab>
                    <v-tab to="/aec"><h4>AEC</h4></v-tab>
                    <!--<v-tab href="http://www.acs-aec.org/index.php?q=es"><h4>AEC</h4></v-tab>-->
                    <v-tab to="/presidencia"><h4>Presidencia Guatemala</h4></v-tab>
                    <v-tab to="/documentos"><h4>Documentos</h4></v-tab>
                    <v-tab to="/saladeprensa"><h4>Sala de Prensa</h4></v-tab>
                    <v-tab to="/agenda"><h4>Actividades</h4></v-tab>
                    <v-tab  to="/ixcumbre"><h4>IX Cumbre Jefes de Estado</h4></v-tab>
                </v-tabs>

        </v-toolbar>
    </v-container>
</template>
