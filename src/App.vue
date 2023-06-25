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
  },
  methods:{
    
    //funzione che cambia la stringa della chiamata per selezionare il pokemon per tipo
    getSelectedPokemonType(){
      
      store.type_url = store.apiUrl
      if(store.selectedType !== ''){
        store.type_url += "&eq[type1]=" + store.selectedType
      }

      //chiamata Api filtrata
      axios.get(store.type_url).then((result) =>{
        //inserisco nella variabile l array della chiamata con la lista dei Pokemon
        store.pokemonList = result.data.docs
      })
    }
  }

}
</script>

<!-- Visualizzo le componenti -->
<template>
  <div>
    <!-- dall'header passo con  $emit("changeType") il valore della select selezionato -->
    <Header @changeType="getSelectedPokemonType()" />
    <Main/>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;


</style>
