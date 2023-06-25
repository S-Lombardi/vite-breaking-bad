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
            <div class="row p-4">
                <div class="col-3">
                    <!-- SELECT PER TIPO -->
                    <select class="form-select select-bar " v-model="store.selected_type" aria-label="Default select example"  @change="$emit('changeType')">
                        <option value="">
                            Seleziona il tipo di Pokemon
                        </option>
                        <option v-for="(type, index) in store.pokemonTypes" :key="index" :value="type"> 
                            {{type}}
                        </option>
                    </select>
                </div>
                <!-- PULSANTE RESET -->
                <div class="col-3 ">
                    <button type="button" class="btn btn-secondary" @click="$emit('clickReset')">
                        Pulsante reset
                    </button>
                </div>
                <!-- BARRA DI RICERCA PER NOME -->
                <div class="col-5">
                    <input class="form-control" v-model="search_name" type="text" placeholder="Scrivi il nome del pokemon che stai cercando..." >
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