<template>
      <v-card>
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="declaraciones"
        :search="search"
        ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Titulo',
            align: 'start',
            value: 'titulo',
          },
          { text: 'Fecha', value: 'fecha' },
        ],
        declaraciones: [
          {
            titulo: 'Declaracion 1',
            fecha: '7/13/2022',
          },
          {
            titulo: 'Declaracion 2',
            fecha: '7/13/2022',
          },
          {
            titulo: 'Declaracion 3',
            fecha: '7/13/2022',
          },
          {
            titulo: 'Declaracion 4',
            fecha: '7/13/2022',
          },
          {
            titulo: 'Declaracion 5',
            fecha: '7/13/2022',
          },
        ],
      }
    },
  }
</script>