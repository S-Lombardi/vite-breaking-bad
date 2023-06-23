<script>
import axios from 'axios'

import Main from './components/Main.vue'
import Header from './components/Header.vue'

import { store } from './store.js'; //importo lo store dal file store.js

//Posso utilizzare le componenti
export default{
  components:{
    Main,
    Header, 
  },
  data(){
    return{

      store,
      //Definisco una variabile per un array inizialmente vuoto
      //in cui inserirò i valori delle card
      pokemonList: []

    }
  },
  mounted(){
    //chiamata Api filtrata
    axios.get(store.apiUrl).then((result) =>{
      //inserisco nella variabile l array della chiamata con la lista dei Pokemon
      store.pokemonList = result.data.docs 
    })  
  }
  
}
</script>

<!-- Visualizzo le componenti -->
<template>
  <div>
    <Header/>
    <Main/>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;


</style>
