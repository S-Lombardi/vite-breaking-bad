import { reactive } from 'vue';


//reactive è un metodo che accetta un oggetto
export const store = reactive( {

    apiUrl :'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10',
    pokemonList: [],
})