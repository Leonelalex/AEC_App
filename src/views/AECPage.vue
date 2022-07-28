<script>
import EnBreve from "../components/AECEnBreve.vue";
import Proposito from "../components/AECProposito.vue";
import Estructura from "../components/AECEstructura.vue";
import Membresia from "../components/AECMembresia.vue";

export default {
    data() {
        return {
            openTab: 1,
            tab1: 'La AEC en breve',
            tab2: 'Próposito y funciones',
            tab3: 'Estructura',
            tab4: 'Membresía',
            tab5: 'Pagina AEC',
        };
    },
    created() {
        this.changeLan(localStorage.getItem('Lan'));
    },
    methods: {
        changeTable(tab) {
            this.openTab = tab;
        },
        changeLan(lan){
            if(lan == 'ESP'){
                this.tab1 = 'La AEC en breve';
                this.tab2 = 'Próposito y funciones';
                this.tab3 = 'Estructura';
                this.tab4 = 'Membresía';
                this.tab5 = 'Pagina AEC';
            }

            if(lan == 'ENG'){
                this.tab1 = 'About the ACS';
                this.tab2 = 'Purpose and main functions';
                this.tab3 = 'Structure';
                this.tab4 = 'Membership';
                this.tab5 = 'ACS Site';
            }

            if(lan == 'FRN'){
                this.tab1 = 'L´AEC en bref';
                this.tab2 = 'Objectifs et fonctions';
                this.tab3 = 'Structure';
                this.tab4 = 'Membres';
                this.tab5 = 'Page AEC';
            }
        }
    },
    mounted() {
        this.$root.$on('changeLan', (lan) =>{
            this.changeLan(lan);
        })
    },
    components: { EnBreve, Proposito, Estructura, Membresia}
}
</script>

<template>

    <v-container>

        <v-tabs background-color="rgba(0,0,0,0)">
            <v-tab @click="changeTable(1)">{{tab1}}</v-tab>
            <v-tab @click="changeTable(2)">{{tab2}}</v-tab>
            <v-tab @click="changeTable(3)">{{tab3}}</v-tab>
            <v-tab @click="changeTable(4)">{{tab4}}</v-tab>
            <v-tab href="http://www.acs-aec.org/index.php?q=es">{{tab5}}</v-tab>
        </v-tabs>


        <v-container class="innerPage">
            <EnBreve v-if="openTab == 1" />
            <Proposito v-if="openTab == 2" />
            <Estructura v-if="openTab == 3" />
            <Membresia v-if="openTab == 4" />
        </v-container>
    </v-container>
</template>
