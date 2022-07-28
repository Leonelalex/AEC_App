<template>
    <v-container>

        <h2>Próposito y funciones</h2>

        <p>La Asociación es un organismo de consulta, concertación y cooperación cuyo propósito es identificar y promover la instrumentación de políticas y programas orientados a:</p>

        <ol>
            <li>Fortalecer, utilizar y desarrollar las capacidades colectivas del Caribe para lograr un desarrollo sostenido en lo cultural, económico, social, científico y tecnológico;</li>
            <li>Desarrollar el potencial del Mar Caribe por medio de la interacción entre los Estados Miembros y con terceros;</li>
            <li>Promover un espacio económico ampliado para el comercio y la inversión que ofrezca oportunidades de cooperación y concertación y, permita incrementar los beneficios que brindan a los pueblos del Caribe los recursos y activos de la región, incluido el Mar Caribe;</li>
            <li>Establecer, consolidar y ampliar, según el caso, las estructuras institucionales y los acuerdos de cooperación que respondan a la diversidad de las identidades culturales, de los requerimientos de desarrollo y de los sistemas normativos de la región.</li>
        </ol>

        <p class="noIndent">La Asociación promoverá en forma gradual y progresiva, entre sus miembros las siguientes actividades:</p>

        <ol>
            <li>La integración económica, incluidas la liberalización comercial, de inversiones, del transporte y de otras áreas relacionadas;</li>
            <li>La discusión de asuntos de interés común con el propósito de facilitar la participación activa y coordinada de la región en los foros multilaterales;</li>
            <li>La formulación e instrumentación de políticas y programas para la cooperación;</li>
            <li>La preservación del medio ambiente y la conservación de los recursos naturales de la región, en particular del Mar Caribe;</li>
            <li>El fortalecimiento de las relaciones amistosas entre los pueblos y gobiernos del Caribe;</li>
            <li>La consulta, cooperación y concertación en las demás áreas que se acuerden.</li>
        </ol>

    </v-container>
</template>

<script>
export default{
    data() {
        return {
            title: 'Próposito y funciones',
            p1: 'La Asociación es un organismo de consulta, concertación y cooperación cuyo propósito es identificar y promover la instrumentación de políticas y programas orientados a:',
            p2: 'La Asociación promoverá en forma gradual y progresiva, entre sus miembros las siguientes actividades:',
            l1: 'Fortalecer, utilizar y desarrollar las capacidades colectivas del Caribe para lograr un desarrollo sostenido en lo cultural, económico, social, científico y tecnológico;',
            l2: 'Desarrollar el potencial del Mar Caribe por medio de la interacción entre los Estados Miembros y con terceros;',
            l3: 'Promover un espacio económico ampliado para el comercio y la inversión que ofrezca oportunidades de cooperación y concertación y, permita incrementar los beneficios que brindan a los pueblos del Caribe los recursos y activos de la región, incluido el Mar Caribe;',
            l4: 'Establecer, consolidar y ampliar, según el caso, las estructuras institucionales y los acuerdos de cooperación que respondan a la diversidad de las identidades culturales, de los requerimientos de desarrollo y de los sistemas normativos de la región.',
            l5: 'La integración económica, incluidas la liberalización comercial, de inversiones, del transporte y de otras áreas relacionadas;',
            l6: 'La discusión de asuntos de interés común con el propósito de facilitar la participación activa y coordinada de la región en los foros multilaterales;',
            l7: 'La formulación e instrumentación de políticas y programas para la cooperación;',
            l8: 'La preservación del medio ambiente y la conservación de los recursos naturales de la región, en particular del Mar Caribe;',
            l9: 'El fortalecimiento de las relaciones amistosas entre los pueblos y gobiernos del Caribe;',
            l10: 'La consulta, cooperación y concertación en las demás áreas que se acuerden.',
        }
    },
    created() {
        this.changeLan(localStorage.getItem('Lan'));
    },
    methods: {
        changeLan(lan){
            if(lan == 'ESP'){
                this.title = 'Próposito y funciones';
                this.p1 = 'La Asociación es un organismo de consulta, concertación y cooperación cuyo propósito es identificar y promover la instrumentación de políticas y programas orientados a:';
                this.p2 = 'La Asociación promoverá en forma gradual y progresiva, entre sus miembros las siguientes actividades:';
                this.l1 = 'Fortalecer, utilizar y desarrollar las capacidades colectivas del Caribe para lograr un desarrollo sostenido en lo cultural, económico, social, científico y tecnológico;';
                this.l2 = 'Desarrollar el potencial del Mar Caribe por medio de la interacción entre los Estados Miembros y con terceros;';
                this.l3 = 'Promover un espacio económico ampliado para el comercio y la inversión que ofrezca oportunidades de cooperación y concertación y, permita incrementar los beneficios que brindan a los pueblos del Caribe los recursos y activos de la región, incluido el Mar Caribe;';
                this.l4 = 'Establecer, consolidar y ampliar, según el caso, las estructuras institucionales y los acuerdos de cooperación que respondan a la diversidad de las identidades culturales, de los requerimientos de desarrollo y de los sistemas normativos de la región.';
                this.l5 = 'La integración económica, incluidas la liberalización comercial, de inversiones, del transporte y de otras áreas relacionadas;';
                this.l6 = 'La discusión de asuntos de interés común con el propósito de facilitar la participación activa y coordinada de la región en los foros multilaterales;';
                this.l7 = 'La formulación e instrumentación de políticas y programas para la cooperación;';
                this.l8 = 'La preservación del medio ambiente y la conservación de los recursos naturales de la región, en particular del Mar Caribe;';
                this.l9 = 'El fortalecimiento de las relaciones amistosas entre los pueblos y gobiernos del Caribe;';
                this.l10 = 'La consulta, cooperación y concertación en las demás áreas que se acuerden.';
            }
            if(lan == 'ENG'){
                this.title = 'Purpose and main functions';
                this.p1 = 'The Association is and organization for consulting, concertation and cooperation, who’s purpose is to identify y promote the instrumentation of policies and programs focused on:';
                this.p2 = 'The Association will gradually and progressively promote the following activities among its members:';
                this.l1 = 'The strengthening of the regional co-operation and integration process, with a view to creating an enhanced economic space in the region;';
                this.l2 = '2.Sustainable Tourism. The importance of the tourism industry to the economic development of all the Members of the ACS transcends questions of physical size or language.';
                this.l3 = 'Promover un espacio económico ampliado para el comercio y la inversión que ofrezca oportunidades de cooperación y concertación y, permita incrementar los beneficios que brindan a los pueblos del Caribe los recursos y activos de la región, incluido el Mar Caribe;';
                this.l4 = 'Establecer, consolidar y ampliar, según el caso, las estructuras institucionales y los acuerdos de cooperación que respondan a la diversidad de las identidades culturales, de los requerimientos de desarrollo y de los sistemas normativos de la región.';
                this.l5 = 'La integración económica, incluidas la liberalización comercial, de inversiones, del transporte y de otras áreas relacionadas;';
                this.l6 = 'La discusión de asuntos de interés común con el propósito de facilitar la participación activa y coordinada de la región en los foros multilaterales;';
                this.l7 = 'La formulación e instrumentación de políticas y programas para la cooperación;';
                this.l8 = 'La preservación del medio ambiente y la conservación de los recursos naturales de la región, en particular del Mar Caribe;';
                this.l9 = 'El fortalecimiento de las relaciones amistosas entre los pueblos y gobiernos del Caribe;';
                this.l10 = 'La consulta, cooperación y concertación en las demás áreas que se acuerden.';
            }
            if(lan == 'FRN'){

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

<style scoped>
    h2{
        padding-bottom: 10px;
        color: #4E97D1;
    }

    p{
        text-indent: 50px;
        text-justify: auto;
        font-size: large;
        padding-bottom: 5px;
    }

    p.noIndent{
        text-indent: 0px;
        text-justify: auto;
        font-size: large;
        padding-bottom: 5px;
    }

    li{
        text-justify: auto;
        font-size: large;
        padding-left: 5px;
    }

    ol{
        padding-bottom: 15px;
        padding-left: 50px;

    }

</style>