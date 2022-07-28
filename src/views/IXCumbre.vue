
<template>  
    <v-container>
        <h2>{{title}}</h2>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    FECHA
                </th>
                <th class="text-left">
                    ACTIVIDAD
                </th>
                <th class="text-left">
                    FORMATO / LUGAR
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in actividades"
                :key="item.name"
                >
                <td>{{ item.fecha }}</td>
                <td>{{ item.actividad }}</td>
                <td>{{ item.formato }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<style scoped>
    h2{
        padding-bottom: 10px;
        color: #4E97D1;
    }
</style>

<script>
  export default {
    data () {
      return {
        actividades: [
          {
            fecha: 'Martes 9 de mayo de 2023',
            actividad: 'XLIV Reunión del Comité Especial de Presupuesto y Administración. (RE)',
            formato: 'Presencial, Antigua Guatemala'
          },
          {
            fecha: 'Martes 9 de mayo de 2023',
            actividad: 'VII Conferencia Internacional de Cooperación de la Asociación de Estados del Caribe (AEC). (RE) (CR)',
            formato: 'Presencial, Antigua Guatemala'
          },
          {
            fecha: 'Martes 9 de mayo de 2023',
            actividad: 'XV Foro Empresarial del Gran Caribe',
            formato: 'Presencial, Antigua Guatemala'
          },
          {
            fecha: 'Miércoles 10 de mayo de 2023',
            actividad: 'XV Foro Empresarial del Gran Caribe',
            formato: 'Presencial, Antigua Guatemala'
          },
          {
            fecha: 'Miércoles 10 de mayo de 2023',
            actividad: 'Reunión preparatoria a la XXVIII Reunión Ordinaria del Consejo de Ministros de la Asociación de Estados del Caribe (AEC). (RE)',
            formato: 'Presencial, Antigua Guatemala'
          },
          {
            fecha: 'Jueves 11 de mayo de 2023',
            actividad: 'XXVIII Reunión Ordinaria del Consejo de Ministros de la Asociación de Estados del Caribe (AEC). (RE)',
            formato: 'Presencial, Antigua Guatemala'
          },
          {
            fecha: 'Viernes 12 de mayo de 2023',
            actividad: 'IX Cumbre de Jefes de Estados y/o Gobierno de la AEC. (RE)',
            formato: 'Presencial, Antigua Guatemala'
          }            
        ],
        title: 'IX Cumbre Jefes De Estado'
      }
    },
    created() {
        this.changeLan(localStorage.getItem('Lan'));
    },
    methods: {
      changeLan(lan){
        if(lan == 'ESP'){
          this.title = 'IX Cumbre Jefes De Estado';
        }
        if(lan == 'ENG'){
          this.title = 'IX Summit Of Heads Of State And/Or Goverment';
        }
        if(lan == 'FRN'){
          this.title = "IX Sommet Des Chefs D'État Et/Ou De Governement";
        }
      }
    },
    mounted() {
        this.$root.$on('changeLan', (lan) =>{
            this.changeLan(lan);
        })
    },
  }
</script>