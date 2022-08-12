<template>
    <v-container>
        <v-row>
            <v-col v-for="noticia in noticias"  cols="6">
            <v-card width="900" class="pa-3 ma-3">
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                            {{noticia.title}}
                        </v-card-title>

                        <v-card-subtitle class="text-h6">
                            {{noticia.subtitle}}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn icon :href="noticia.twit" target="_blank" v-if="noticia.twit != null">
                                <v-icon color="blue">
                                    {{twitterIcon}}
                                </v-icon>
                            </v-btn>
                            <v-btn icon :href="noticia.link" target="_blank" v-if="noticia.link != null">
                                <v-icon color="blue">
                                    {{linkIcon}}
                                </v-icon>
                            </v-btn>
                        </v-card-actions>
                    </div>
                    <v-avatar class="ma-3" size="200" tile>
                        <v-img :src="noticia.image"></v-img>
                    </v-avatar>
                </div>
            </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import {mdiTwitter, mdiLink} from '@mdi/js';
    
    export default{
        data() {
        return {
            twitterIcon : mdiTwitter,
            linkIcon : mdiLink,
            noticias: [
                {
                    title: "Guatemala, 02 agosto de 2022",
                    subtitle: "El Viceministro Geovani Castillo presidió la VII Reunión del Mecanismo de Coordinación, como parte de la agenda de trabajo de la Presidencia de Guatemala, priorizando las acciones del Plan de Trabajo de Guatemala y el Plan de Acción de la AEC.",
                    image: "images/noticias/noticia17.jpg",
                    link: null,
                    twit: "https://twitter.com/minexgt/status/1554605528168407041?s=12&t=8CgDFy47sQ-9MJfODpyGbQ",
                },
                {
                    title: "Guatemala, 29 de julio de 2022",
                    subtitle: "Guatemala, en calidad de Presidencia del Consejo de Ministros de la AEC, le desea un feliz XXVIII aniversario a la AEC. El XXVIII aniversario es una ocasión para extender un saludo muy especial a todos los países miembros y asociados, países observadores y amigos cooperantes de la AEC, comprometidos con el fortalecimiento de la cooperación y promoción de oportunidades para nuestros pueblos.",
                    image: "images/noticias/noticia16.jpg",
                    link: null,
                    twit: "https://twitter.com/minexgt/status/1553079332691656704?s=12&t=8CgDFy47sQ-9MJfODpyGbQ",
                },
                {
                    title: "Guatemala, 28 de julio de 2022",
                    subtitle: "El Viceministro Geovani Castillo presidió la II Reunión del Grupo de Trabajo para revisar las conclusiones de la auditoría realizada a la Asociación de Estados del Caribe, junto al Secretario General de la misma, Rodolfo Sabonge y los Estados Miembros.",
                    image: "images/noticias/noticia15.jpg",
                    link: null,
                    twit: "https://twitter.com/minexgt/status/1552821653197189120?s=12&t=8CgDFy47sQ-9MJfODpyGbQ",
                },
                {
                    title: "Guatemala, 15 de julio de 2022",
                    subtitle: "El Viceministro Giovani Castillo presidió la I Reunión del Grupo de Trabajo para revisar las conclusiones de auditoría.",
                    image: "images/noticias/noticia13.jpg",
                    link: null,
                    twit: "https://twitter.com/minexgt/status/1548068592347799556?s=24&t=cAzgNhfhiWhmecw68YapZw",
                },
                {
                    title: "Guatemala, 14 de julio de 2022",
                    subtitle: "El Canciller Mario Búcaro, dialogó con el PGA de la ONU y el Secretario General de la AEC, abordando temas de turismo sostenible, cambio climático y agenda azul.",
                    image: "images/noticias/noticia14.jpg",
                    link: null,
                    twit: "https://twitter.com/minexgt/status/1547628300427636736?s=24&t=cAzgNhfhiWhmecw68YapZw",
                },
				{
                    title: "Guatemala, 17 de junio de 2022",
                    subtitle: "En el marco de la Presidencia de la AEC, el Minex presidió la reunión de la Mesa Directiva del Comité Especial de Presupuesto y Administración.",
                    image: "images/noticias/noticia12.jpg",
                    link: null,
                    twit: "https://twitter.com/minexgt/status/1539003098668093440?s=24&t=cAzgNhfhiWhmecw68YapZw",
                },
				{
                    title: "Guatemala, 1 de junio de 2022",
                    subtitle: "Guatemala presenta a la AEC su Catálogo de Oferta de Cooperación Internacional.",
                    image: "images/noticias/noticia11.jpg",
                    link: "https://www.minex.gob.gt/Noticias/Noticia.aspx?ID=30461&Busqueda=aec",
                    twit: null,
                },
				{
                    title: "Guatemala, 1 de junio de 2022",
                    subtitle: "Canciller Mario Búcaro participa en reunión de Mesa Directiva del Consejo de Ministros de la AEC.",
                    image: "images/noticias/noticia10.jpg",
                    link: "https://www.minex.gob.gt/Noticias/Noticia.aspx?ID=30462&Busqueda=aec",
                    twit: null,
                },
				{
                    title: "Guatemala, 26 de mayo de 2022",
                    subtitle: "En el marco de la presidencia de la AEC, se sostuvo la Reunión de Trabajo con el Secretario General de la AEC y el Secretario de la SIECA.",
                    image: "images/noticias/noticia9.jpg",
                    link: null,
                    twit: "https://twitter.com/MinexGt/status/1529806997180358657?s=20&t=iN9jKW068iPabLdh40nwjw",
                },
				{
                    title: "Guatemala, 26 de mayo de 2022",
                    subtitle: "Reunión de representantes de países observadores residentes en Guatemala.",
                    image: "images/noticias/noticia8.jpg",
                    link: null,
                    twit: "https://twitter.com/ACS_AEC/status/1529965727167438927?s=20&t=iN9jKW068iPabLdh40nwjw",
                },
				{
                    title: "Guatemala, 26 de mayo de 2022",
                    subtitle: "Encuentros de Minex con Secretaría General de la AEC abarcaron turismo sostenible, desarrollo y conectividad.",
                    image: "images/noticias/noticia7.jpg",
                    link: "https://www.minex.gob.gt/Noticias/Noticia.aspx?ID=30442&Busqueda=aec",
                    twit: null,
                },
				{
                    title: "Guatemala, 24 de mayo de 2022",
                    subtitle: "Visita oficial del Secretario General de la AEC a Guatemala en el marco de la Presidencia del Consejo de Ministros 2022-2023.",
                    image: "images/noticias/noticia6.jpg",
                    link: null,
                    twit: "https://twitter.com/MinexGt/status/1529192028084527105?s=20&t=iN9jKW068iPabLdh40nwjw",
                },
				{
                    title: "Guatemala, 24 de mayo de 2022",
                    subtitle: "Canciller de Guatemala y secretario general de la AEC abordan asuntos de cambio climático, seguridad alimentaria, migración y recuperación económica.",
                    image: "images/noticias/noticia5.jpg",
                    link: "https://www.minex.gob.gt/Noticias/Noticia.aspx?ID=30433&Busqueda=aec",
                    twit: "https://twitter.com/MinexGt/status/1529246976163860482?s=20&t=iN9jKW068iPabLdh40nwjw",
                },
				{
                    title: "Ciudad de Panamá, Panamá, 3 de mayo de 2022",
                    subtitle: "Guatemala y Trinidad y Tobago resaltan relación estratégica entre América Central y el Caribe.",
                    image: "images/noticias/noticia4.jpg",
                    link: "https://www.minex.gob.gt/Noticias/Noticia.aspx?ID=30354&Busqueda=aec",
                    twit: null,
                },
				{
                    title: "Ciudad de Panamá, Panamá, 3 de mayo de 2022",
                    subtitle: "Guatemala y Surinam refuerzan vínculos bilaterales y regionales.",
                    image: "images/noticias/noticia3.jpg",
                    link: "https://www.minex.gob.gt/Noticias/Noticia.aspx?ID=30352&Busqueda=aec",
                    twit: null,
                },
				{
                    title: "La Habana, Cuba, 3 de mayo de 2022",
                    subtitle: "Embajada de Guatemala en Cuba se reúne en secretario general de la AEC.",
                    image: "images/noticias/noticia2.jpg",
                    link: "https://www.minex.gob.gt/Noticias/Noticia.aspx?ID=30344&Busqueda=aec",
                    twit: null,
                },
				{
                    title: "29 de abril de 2022",
                    subtitle: "Guatemala es elegida para presidir la Asociación de Estados del Caribe durante el período 2022-2023.",
                    image: "images/noticias/noticia1.jpg",
                    link: "https://www.minex.gob.gt/Noticias/Noticia.aspx?ID=30337&Busqueda=aec",
                    twit: "https://twitter.com/minexgt/status/1520155199486283782?s=24&t=cAzgNhfhiWhmecw68YapZw",
                },
            ]
        }
    },
    }
</script>