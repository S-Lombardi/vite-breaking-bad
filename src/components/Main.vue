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
        <div class="pokedex p-4">
            <div class="row justify-content-center align-items-center">
                <div v-for="(pokemon, index) in store.pokemonList" :key="index"  class="col-6 col-md-4 col-lg-3">
                    <!-- (item, index) -> :myPokemon="item". MyPokemon è il nome scelto per la prop che passo
                    //alla componente cardPokemon (componente FIGLIO di Main)-->
                    <cardPokemon :myPokemon="pokemon"/>    
                </div>
            </div>
            
        </div> 
    </main>
</template>


<style lang="scss" scoped >
@use '../styles/partials/variables' as *;

.pokedex{
    background-color: rgb(228, 66, 26);
    margin-top:20px;
    border-radius: 20px;
}

.row{
    background-color: rgb(177, 209, 205);
    border-radius: 20px;
}


</style>