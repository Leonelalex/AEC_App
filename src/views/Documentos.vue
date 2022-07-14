<script>
import ComunicadosTable from "../components/ComunicadosTable.vue";
import DeclaracionesTable from "../components/DeclaracionesTable.vue";
import AcuerdosTable from "../components/AcuerdosTable.vue";

export default {
    data() {
        return {
            openTable: 1
        };
    },
    methods: {
        changeTable(table) {
            this.openTable = table;
        }
    },
    components: { ComunicadosTable, DeclaracionesTable, AcuerdosTable }
}
</script>

<template>

    <v-container>

        <v-tabs background-color="rgba(0,0,0,0)">
            <v-tab @click="changeTable(1)">Comunicados</v-tab>
            <v-tab @click="changeTable(2)">Declaraciones</v-tab>
            <v-tab @click="changeTable(3)">Acuerdos</v-tab>
        </v-tabs>


        <v-container class="innerPage">
            <ComunicadosTable v-if="openTable == 1" />
            <DeclaracionesTable v-if="openTable == 2" />
            <AcuerdosTable v-if="openTable == 3" />
        </v-container>
    </v-container>
</template>

<style>

</style>