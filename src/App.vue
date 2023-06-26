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
    }
  },
  mounted(){
  
    this.getSelectedPokemonType()
    this.getPokemonTypes();
  },
 
  methods:{
    
    //funzione per selezionare pokemon per tipo
    getSelectedPokemonType(){
      store.type_url = store.apiUrl
      if(store.selected_type !== ''){
        //Aggiungo alla fine della chiamata la stringa che filtra per tipo di pokemon
        store.type_url += "&eq[type1]=" + store.selected_type
      }
      //chiamata Api filtrata
      axios.get(store.type_url).then((result) =>{
        //inserisco nella variabile il risultato della chiamata filtrata per tipo
        store.pokemonList = result.data.docs
      })
    },

    //funzione per la ricerca dei Pokmon per nome
    searchPokemon(){
      store.type_url = store.apiUrl
      store.type_url += "&q[name]=" + store.search_name
      //chiamata Api filtrata
      axios.get(store.type_url).then((result) =>{
        //inserisco nella variabile il risultato della chiamata filtrata per nome
        store.pokemonList = result.data.docs
      })
    },
    
    //inserisco in pokemonTypes il risultato della chiamata di tutti i tipi di pokemon
    getPokemonTypes() {
      axios.get(store.apiUrlTypes).then((result) =>{
        store.pokemonTypes = result.data
      })
    },
    
    //svuoto la variabile che contiene il tipo di pokemon selezionato
    //
    resetSearch(){
      store.selected_type = '';
      store.search_name = '';
      this.getSelectedPokemonType()
    }
    
  }

}
</script>

<!-- Visualizzo le componenti -->
<template>
  <div>
    <!-- Passo con $emit("changeType" - @clickSearch ) l'evento @ dall' Header -->
    <Header @changeType="getSelectedPokemonType()" @changeName=" searchPokemon()" @clickReset="resetSearch()"/>
    <Main/>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;


</style>
