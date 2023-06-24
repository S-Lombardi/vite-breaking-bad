<script>
import {store} from '../store.js'

export default {
    data(){
        return {
            store,
        }
    }

}
</script>


<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <!-- SELECT -->
                    <select class="form-select select-bar mt-5" v-model="store.selectedType"   aria-label="Default select example">
                        <option value="">
                            Seleziona il tipo di Pokemon
                        </option>
                        <option v-for="(type, index) in store.pokemonTypes" :key="index" :value="type"> 
                            {{type}}
                        </option>
                    </select>
                </div>
            </div>
        </div>

    </header>
</template>


<style lang="scss" scoped>
    .col-12{
        border: 1px dashed red;
    }

</style>