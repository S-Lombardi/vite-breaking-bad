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
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10').then((result) =>{
            this.pokemonList = result.data.docs 
        })
        

    }
    
}

</script>


<template lang="">
    <main>
        MAin
    </main>
    
</template>


<style lang="scss">
@use '../styles/partials/variables' as *;
    
</style>