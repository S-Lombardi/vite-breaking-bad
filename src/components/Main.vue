<script>

import cardPokemon from './cardPokemon.vue'

import { store } from '../store.js'; //importo lo store dal file store.js (che contiene la chiamata api)

export default {
    components:{
        cardPokemon,
    },
    data(){
        return {
            store,
        }  
    }  
}
</script>


<template lang="">
    <main class="container">   
        <div class="row justify-content-center align-items-center">
            <div v-for="(pokemon, index) in store.pokemonList" :key="index"   class="col-6 col-md-4 col-lg-3">
                <!-- (item, index) -> :myPokemon="item". MyPokemon è il nome scelto per la prop che passo
                //alla componente cardPokemon (componente FIGLIO di Main)-->
                <cardPokemon :myPokemon="pokemon"/>


            </div>
        </div>
    </main>
</template>


<style lang="scss" >
@use '../styles/partials/variables' as *;


</style>