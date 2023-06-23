<script>
import axios from 'axios'
//Importo la componente delle card
import cardPokemon from './cardPokemon.vue'

export default {
    components:{
        cardPokemon,
    },
    data(){
        return{
            //Definisco una variabile per un array inizialmente vuoto
            //in cui inserirò i valori delle card
            pokemonList: []

        }
    },
    mounted(){
        //chiamata Api filtrata
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10').then((result) =>{
            //inserisco nella variabile l array della chiamata con la lista dei Pokemon
            this.pokemonList = result.data.docs 
        })  
    }
    
}
</script>


<template lang="">
    <main class="container">   
        <div class="row justify-content-center align-items-center">
            <div v-for="(pokemon, index) in pokemonList" :key="index"   class="col-6 col-md-4 col-lg-3">
                <cardPokemon/>
            </div>
        </div>
    </main>
</template>


<style lang="scss">
@use '../styles/partials/variables' as *;
    
</style>