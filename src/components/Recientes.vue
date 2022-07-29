<template>
    <v-row>
        <v-col>

            <h3>Cápsulas (Recientes)</h3>
            <v-img></v-img>
            <a href="">Link</a>

        </v-col>

        <v-col>
            <blockquote class="twitter-tweet"><p lang="es" dir="ltr">
                <a href="https://twitter.com/hashtag/CancillerGT?src=hash&amp;ref_src=twsrc%5Etfw">#CancillerGT</a> 
                <a href="https://twitter.com/MarioBucaroGT?ref_src=twsrc%5Etfw">@MarioBucaroGT</a> sostuvo una videollamada con SG de 
                <a href="https://twitter.com/ACS_AEC?ref_src=twsrc%5Etfw">@ACS_AEC</a>, 
                <a href="https://twitter.com/RodolfoSabonge?ref_src=twsrc%5Etfw">@RodolfoSabonge</a>. 🇬🇹 reiteró el compromiso con el Plan de Trabajo de la Presidencia, en sus ejes de cooperación, cambio climático, agenda azul, seguridad alimentaria, entre otros, de cara a la 
                <a href="https://twitter.com/hashtag/CumbreAEC2023?src=hash&amp;ref_src=twsrc%5Etfw">#CumbreAEC2023</a>. 
                <a href="https://t.co/e1W6XigxqW">pic.twitter.com/e1W6XigxqW</a></p>&mdash; MINEX Guatemala 🇬🇹 (@MinexGt) 
                <a href="https://twitter.com/MinexGt/status/1550311489533345792?ref_src=twsrc%5Etfw">July 22, 2022</a>
            </blockquote> 
        </v-col>

        <v-col>
            <v-card>
                <h3>{{title}}</h3>
                <p>{{p1}}</p>
                <p>{{p2}}</p>
                <p>{{p3}}</p>
                <p>{{p4}}</p>
                <p>{{p5}}</p>
                <p>{{p6}}</p>
                <p>{{p7}}</p>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default{
        data() {
            return {
                title: 'Próximos Eventos',
                p1: '2 de agosto - VII Reunión del Mecanismo de Coordinación (RE)',
                p2: '17 y 18 de agosto - Reuniones del Comité de Redacción (RNE)',
                p3: '23 de agosto - XXXI Reunión del Comité Especial de Transporte',
                p4: '25 de agosto - XXXVII Reunión del Comité Especial del Desarrollo de Comercio y de Relaciones Económicas Externas',
                p5: '26 de agosto - III Reunión del Grupo de Trabajo (RNE)',
                p6: '29 de agosto - IV Reunión del Grupo de Trabajo (RNE)',
                p7: '30 de agosto - XXXIII Reunión del Comité Especial de Turismo Sostenible'
            }
        },
        created() {
            this.changeLan(localStorage.getItem('Lan'));
        },
        methods:{
            changeLan(lan){
                if(lan == 'ESP'){
                    this.title = 'Próximos Eventos';
                    this.p1 = '2 de agosto - VII Reunión del Mecanismo de Coordinación (RE)';
                    this.p2 = '17 y 18 de agosto - Reuniones del Comité de Redacción (RNE)';
                    this.p3 = '23 de agosto - XXXI Reunión del Comité Especial de Transporte';
                    this.p4 = '25 de agosto - XXXVII Reunión del Comité Especial del Desarrollo de Comercio y de Relaciones Económicas Externas';
                    this.p5 = '26 de agosto - III Reunión del Grupo de Trabajo (RNE)';
                    this.p6 = '29 de agosto - IV Reunión del Grupo de Trabajo (RNE)';
                    this.p7 = '30 de agosto - XXXIII Reunión del Comité Especial de Turismo Sostenible';
                }
                if(lan == 'ENG'){
                    this.title = 'Upcoming Events';
                    this.p1 = 'August 2nd - VII Meeting of the Coordination Mechanism (SM)';
                    this.p2 = 'August 17th – 18th - Drafting Committee Meetings (NSM)';
                    this.p3 = '23 de agosto - XXXI Reunión del Comité Especial de Transporte';
                    this.p4 = 'August 25th - XXXVII Meeting of the Special Committee on Trade Development and External Economic Relations';
                    this.p5 = 'August 26th - III Work Group Meeting (NSM)';
                    this.p6 = 'August 29th - IV Work Group Meeting (NSM)';
                    this.p7 = 'August 30th - XXXIII Meeting of the Special Committee on Sustainable Tourism (TBC)';
                }
                if(lan == 'FRN'){
                    this.title = 'Prochains Événements';
                    this.p1 = '2 août - VIIe Réunion du Mécanisme de Coordination (RS)';
                    this.p2 = '17 – 18 août - Réunions du Comité de Rédaction (RNS)';
                    this.p3 = '23 août - XXXI Réunion du Comité spécial sur le Transport';
                    this.p4 = '25 août - XXXVII Réunion du Comité spécial sur le Développement du Commerce et les Relations Economiques Extérieures';
                    this.p5 = '26 août - III Réunion du Groupe de travail (RNS)';
                    this.p6 = '29 août - IV Réunion du Groupe de travail (RNS)';
                    this.p7 = '30 août - XXXIII Réunion du Comité Spécial sur le Tourisme Durable';
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

