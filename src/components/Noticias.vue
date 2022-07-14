<template>
    <v-container>

        <v-card max-width="600" outlined v-for="n in 6">
            <v-list-item>
            <v-list-item-avatar
                tile
                size="80"
                color="grey"
            ></v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-subtitle>1{{n}} Julio 2022</v-list-item-subtitle>
                <v-list-item-title >Noticia de prueba {{n}} Lore ipsum no magnu se tira</v-list-item-title>
                
            </v-list-item-content>
            </v-list-item>
        </v-card>

    </v-container>
</template>

<script>

</script>