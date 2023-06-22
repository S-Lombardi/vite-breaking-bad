<script>
//Importo le componenti
import Main from './components/Main.vue'
import Header from './components/Header.vue'

//Posso utilizzare le componenti
export default{
  components:{
    Main,
    Header, 
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
