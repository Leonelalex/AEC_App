<style scoped>
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
                    <v-tab to="/"><h4>{{tab1}}</h4></v-tab>
                    <v-tab to="/aec"><h4>{{tab2}}</h4></v-tab>
                    <v-tab to="/presidencia"><h4>{{tab3}}</h4></v-tab>
                    <v-tab to="/documentos"><h4>{{tab4}}</h4></v-tab>
                    <v-tab to="/saladeprensa"><h4>{{tab5}}</h4></v-tab>
                    <v-tab to="/agenda"><h4>{{tab6}}</h4></v-tab>
                    <v-tab  to="/ixcumbre"><h4>{{tab7}}</h4></v-tab>
                </v-tabs>

                <div>
                    <select @input="changeLan">
                        <option lang="de" value="ESP" selected>Español</option>
                        <option lang="en"  value="ENG">English</option>
                        <option lang="fr"  value="FRN">Français</option>
                    </select>
                </div>
        </v-toolbar>
    </v-container>
</template>

<script>
    export default{
        data(){
            return {
                lan: localStorage.getItem('Lan'),
                tab1: 'Inicio',
                tab2: 'AEC',
                tab3: 'Presidencia Guatemala',
                tab4: 'Documentos',
                tab5: 'Sala de Prensa',
                tab6: 'Actividades',
                tab7: 'IX Cumbre Jefes de Estado'
            }
        },
        watch:{
            lan(newLan) {
                if(newLan == 'ESP'){
                    this.tab1 = "Inicio";
                    this.tab2 = "AEC";
                    this.tab3 = 'Presidencia Guatemala',
                    this.tab4 = 'Documentos',
                    this.tab5 = 'Sala de Prensa',
                    this.tab6 = 'Actividades',
                    this.tab7 = 'IX Cumbre Jefes de Estado'
                }
                if(newLan == 'ENG'){
                    this.tab1 = "Home";
                    this.tab2 = "ACS";
                    this.tab3 = 'Guatemala’s Presidency',
                    this.tab4 = 'Documents',
                    this.tab5 = 'Media Center',
                    this.tab6 = 'Events',
                    this.tab7 = 'IX Summit of Heads of State and/or Government'
                }
                if(newLan == 'FRN'){
                    this.tab1 = "Début";
                    this.tab2 = "AEC";
                    this.tab3 = 'Présidence Guatemala',
                    this.tab4 = 'Documents',
                    this.tab5 = 'Centre de Presse',
                    this.tab6 = 'Activités',
                    this.tab7 = 'IX Sommet des Chefs d’État et/ou de Gouvernement'
                }
            }
        },
        methods:{
            changeLan(lan){
                localStorage.setItem('Lan', lan.target.value);
                this.lan = lan.target.value;
                this.$root.$emit('changeLan', lan.target.value);
            }
        }
    }
</script>
