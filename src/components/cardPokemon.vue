<script>
export default {
    props:{
        myPokemon : Object,
    },

    computed:{
        //funzione per recuperare i colori delle card dall'array dei pokemon
        getCardColor(){
            return this.myPokemon.color.toLowerCase()
        }

    }
}
</script>


<template lang="">
    
    <div class="card d-flex flex-column align-items-center mt-3 mb-3 color-filter" :style="{'background-color':getCardColor}">
        <img :src="myPokemon.imageUrl" class="mb-3 mt-3">
        <div class="">
            {{myPokemon.number}}
        </div>
        <div class="">
            <strong>
            {{myPokemon.name}}
            </strong>
        </div> 
        
        <em class="d-block ">
            {{myPokemon.type1}}
        </em>   
    </div>

</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

// .card {
//     background-color: rgb(151, 151, 151);
// }
img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    
}
    
</style>