import { useEffect, useState } from 'react';
import './PokemonCardsList.css';

import PokemonCards from './PokemonCards';


function PokemonCardsList(){
    const [pokemonCount, setPokemonCount] = useState(12);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(()=>{
        fetchPokemons();
    }, []);

    // function to fetch data from API
    const fetchPokemons = async () => {
        const pokemon_api = `https://pokeapi.co/api/v2/pokemon`;
        await fetch(`${pokemon_api}?limit=${pokemonCount}`)
            .then(res => res.json())
            .then(data => setPokemonList(data.results));
    }

    // function to create pokemoncards component list
    function cardsList(){
        const list = pokemonList.map(pokemon => {
            return <PokemonCards
                key = {'pokemonid-' + pokemon.name}
                name = {pokemon.name}
                url = {pokemon.url}
            />
        })

        return list;
    }
    

    return(
        <div className = 'flex items-center justify-center my-5'>
            <div className='pokemonCardsList rounded-md grid grid-cols-1 md:grid-cols-3'>
                { 
                    cardsList()
                }
            </div>
        </div>       
    );
}

export default PokemonCardsList;