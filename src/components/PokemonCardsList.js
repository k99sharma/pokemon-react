import { useEffect, useState } from 'react';
import './PokemonCardsList.css';

// importing components
import PokemonCards from './PokemonCards';
import LoadingButton from './LoadingButton';


function PokemonCardsList(){
    const [pokemonCount, setPokemonCount] = useState(12);
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoding] = useState(false);

    useEffect(()=>{
        fetchPokemons();
    }, [pokemonCount]);

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

    // function to load more pokemons
    function loadMorePokemons(){
        setIsLoding(true);
        setTimeout(()=>{
            setPokemonCount(pokemonCount + 12);
            setIsLoding(false);
            console.log(pokemonCount);
        }, 1500)
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