<script>
import {store} from '../store.js'

export default {
    data(){
        return {
            store,
        }
    },
    
}
</script>


<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-3 p-4">
                    <!-- SELECT -->
                    <select class="form-select select-bar " v-model="store.selectedType" aria-label="Default select example"  @change="$emit('changeType')">
                        <option value="">
                            Seleziona il tipo di Pokemon
                        </option>
                        <option v-for="(type, index) in store.pokemonTypes" :key="index" :value="type"> 
                            {{type}}
                        </option>
                    </select>
                </div>
                <!-- PULSANTE RESET -->
                <div class="col-3 p-4">
                    <button type="button" class="btn btn-secondary" @click="$emit('clickReset')">
                        Pulsante reset
                    </button>

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