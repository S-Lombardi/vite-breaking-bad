import { reactive } from 'vue';

//reactive è un metodo che accetta un oggetto
export const store = reactive( {
    apiUrl :'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=12',

    //Definisco una variabile per un array inizialmente vuoto in cui inserirò la lista dei pokemon
    pokemonList: [],

    // inserisco in un array tutti i tipi di pokemon 
    pokemonTypes : [
        [
            "Bug",
            "Dark",
            "Dragon",
            "Electric",
            "Fairy",
            "Fighting",
            "Fire",
            "Flying",
            "Ghost",
            "Grass",
            "Ground",
            "Ice",
            "Normal",
            "Poison",
            "Psychic",
            "Rock",
            "Steel",
            "Water"
        ]
    ]
})