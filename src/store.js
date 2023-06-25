import { reactive } from 'vue';

//reactive è un metodo che accetta un oggetto
export const store = reactive( {
    apiUrl :'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=12',
    apiUrlTypes: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1',
    //Definisco una variabile per un array inizialmente vuoto in cui inserirò la lista dei pokemon
    pokemonList: [],

    // inserisco in un array tutti i tipi di pokemon 
    pokemonTypes : [],

    //variabile per salvare il tipo di pokemon selezionato nella select
    selected_type: '',
    
    //Variabile in cui salvare la chiamata api per tipo di pokemon selezionato
    type_url: '',

    search_name:''
})