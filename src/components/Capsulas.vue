<template>
    <v-container>
        <v-card max-width="500" v-for="capsula in capsulas" class="pa-2 ma-2">
            <v-card-subtitle class="text-h6">
                {{capsula.texto}}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn icon :href="capsula.twit" target="_blank">
                    <v-icon color="blue">
                        {{twitterIcon}}
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import {mdiTwitter} from '@mdi/js';

export default{
    data() {
        return {
            twitterIcon : mdiTwitter,
            capsulas: [
                {
                    texto: "Guatemala, 24 de mayo de 2022. Visita oficial del Secretario General de la AEC.",
                    twit: "https://twitter.com/minexgt/status/1529607609636032512?s=24&t=cAzgNhfhiWhmecw68YapZw"
                },
                {
                    texto: "Guatemala, 25 de mayo de 2022. Reunión de Trabajo en el marco de la AEC, junto con Inguat y MINECO.",
                    twit: "https://twitter.com/MinexGt/status/1529607609636032512?s=20&t=iN9jKW068iPabLdh40nwjw"
                },
                {
                    texto: "Guatemala, 26 de mayo de 2022. En el marco de la Presidencia del Consejo de Minisitros de Guatemala, autoridades del Minex conversaron con el Secretario General de la AEC, la PNUD y la ONU, para avanzar en el Plan de Trabajo.",
                    twit: "https://twitter.com/MinexGt/status/1529842932706058240?s=20&t=iN9jKW068iPabLdh40nwjw"
                },
            ]
        }
    },
}
</script>