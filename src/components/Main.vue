<script>
import axios from 'axios'
export default {
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
            //inserisco nella variabile larray della chiamata con la lista dei Pokemon
            this.pokemonList = result.data.docs 
        })  
    }
    
}

</script>


<template lang="">
    <main class="container">   
        <div class="row justify-content-center align-items-center">
            <div v-for="(pokemon, index) in pokemonList" :key="index"   class="col-6 col-md-4 col-lg-3">
                {{ pokemon.name }}
            </div>
        </div>
    </main>
</template>


<style lang="scss">
@use '../styles/partials/variables' as *;
    
</style>