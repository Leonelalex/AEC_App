<template>
    <v-container>
    <h2>{{title}}</h2>
    <p>{{mainText}}</p>
    </v-container>
</template>

<script>
export default{
    data(){
        return {
            title: 'La AEC en breve',
            mainText: 'Es una organización para la consulta, la cooperación y la acción concertada, con un enfoque actual centrado en la facilitación comercial, el transporte, el turismo sostenible y los desastres naturales; además de un gran interés en la preservación del Mar Caribe, concebido como el principal patrimonio de los pueblos de esa extensa zona. La Asociación de Estados del Caribe (AEC) fue creada mediante su Convenio Constitutivo suscrito el 24 de julio de 1994 en Cartagena de Indias (Colombia), y entró en funciones el 17 de agosto del año siguiente en la primera cumbre de jefes de Estado y de Gobierno, con sede en Trinidad y Tobago.'
        }
    },
    created(){
        this.changeLan(localStorage.getItem('Lan'));
    },
    mounted() {
        this.$root.$on('changeLan', (lan) =>{
            this.changeLan(lan);
        })
    },
    methods:{
        changeLan(lan){
            if(lan == 'ESP'){
                this.title = 'La AEC en breve';
                this.mainText = 'Es una organización para la consulta, la cooperación y la acción concertada, con un enfoque actual centrado en la facilitación comercial, el transporte, el turismo sostenible y los desastres naturales; además de un gran interés en la preservación del Mar Caribe, concebido como el principal patrimonio de los pueblos de esa extensa zona. La Asociación de Estados del Caribe (AEC) fue creada mediante su Convenio Constitutivo suscrito el 24 de julio de 1994 en Cartagena de Indias (Colombia), y entró en funciones el 17 de agosto del año siguiente en la primera cumbre de jefes de Estado y de Gobierno, con sede en Trinidad y Tobago.';
            }

            if(lan == 'ENG'){
                this.title = 'About the ACS';
                this.mainText = 'Is an organization for consultation, cooperation, and concerted action, currently focusing on trade facilitation, transport, sustainable tourism and natural disasters; moreover with a great interest in the preservation of the Caribbean Sea, conceived as the great heritage of the peoples of that extensive area. The Association of Caribbean States (ACS) was created through its Constitutive Agreement signed on July 24, 1994 in Cartagena de Indias (Colombia), and took office on August 17 of the following year at the first summit of Heads of State and Government, based in Trinidad and Tobago. .';
            }

            if(lan == 'FRN'){
                this.title = 'L´AEC en bref';
                this.mainText = "L’association des Etats de la caraïbe est un issue de la volonté des trente-deux (32) États, pays et territoires de la Grande Caraïbe afin d’améliorer la coopération au sein de la région, une initiative basée sur des proximités géographique évidente et des liens historiques connu de tous. La Convention créant l'AEC a été signée le 24 juillet 1994 à Carthagène en Colombie, dans le but de promouvoir la consultation, la coopération et l'action concertée entre tous les pays de la Caraïbe.";
            }
        }
    }
}
</script>

<style scoped>
    h2{
        padding-bottom: 10px;
        color: #4E97D1;
    }

    p{
        text-indent: 50px;
        text-justify: auto;
        font-size: large;
    }

</style>

