import { useEffect, useState } from 'react';
import './PokemonCardsList.css';

import config_values from '../utilities/config';
import { checkFilter } from '../utilities/functions';

// importing components
import PokemonCards from './PokemonCards';
import LoadingButton from './LoadingButton';


function PokemonCardsList(props){
    const [pokemonCount, setPokemonCount] = useState(config_values.POKEMON_COUNT);
    const [isLoading, setIsLoding] = useState(false);

    useEffect(()=>{}, [pokemonCount]);

    // function to create pokemoncards component list
    function cardsList(){
        let count = 0;
        const list = props.fullPokemonList.map(pokemon => {
            if(checkFilter(pokemon.url, config_values.REGIONS, props.regionFilter) && count < pokemonCount){
                count += 1;
                return <PokemonCards
                    key = {'pokemonid-' + pokemon.name}
                    name = {pokemon.name}
                    url = {pokemon.url}
                />
            }
        });

        return list;
    }

    // function to increase pokemon count
    function increasePokemonCount(){
        setPokemonCount(pokemonCount + config_values.POKEMON_COUNT);
        setIsLoding(false);
    }

    // function to load more pokemons
    function loadMorePokemons(){
        setIsLoding(true);
        setTimeout(increasePokemonCount, config_values.TIMEOUT_INTERVAL)
    }

    return(
        <div className = 'flex flex-col items-center justify-center my-5'>
            <div className='pokemonCardsList rounded-md grid grid-cols-1 md:grid-cols-3'>
                { 
                    cardsList()
                }
            </div>

            <div className = 'pokemonCardList__button my-5'>
                <LoadingButton loadMore = {loadMorePokemons} loading = {isLoading} />
            </div>
        </div>       
    );
}

export default PokemonCardsList;