<script>
export default {
    props:{
        myPokemon : Object,
    }
    
}
</script>


<template lang="">
    <div>
        <img :src="myPokemon.imageUrl" class="mb-3">
        <div>
            {{myPokemon.number}}
        </div>
        <strong>
            {{myPokemon.name}}
        </strong>
        <em class="d-block">
            {{myPokemon.type1}}
        </em>   

        
    </div>
</template>


<style lang="scss" scoped>
    
</style>