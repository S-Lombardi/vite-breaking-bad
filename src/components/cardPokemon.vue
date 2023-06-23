<script>
export default {
    props:{
        myPokemon : Object,
    },
}
</script>


<template lang="">
    <div class="mt-5">
        <div class="card d-flex flex-column align-items-center ">
            <img :src="myPokemon.imageUrl" class="mb-3 mt-4">
            <div class="">
                {{myPokemon.number}}
            </div>
            <div class="text-center">
                <strong>
                {{myPokemon.name}}
                </strong>
            </div> 
            
            
            <em class="d-block text-center ">
                {{myPokemon.type1}}
            </em>   

        </div>

        
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    background-color: gray;
}
img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
    
</style>