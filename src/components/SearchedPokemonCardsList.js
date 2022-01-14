import './SearchedPokemonCardsList.css';

// importing components
import PokemonCards from "./PokemonCards";


function SearchedPokemonCardsList(props){
    function cardsList(){
        const list = props.pokemonList.map(pokemon => {
            return <PokemonCards
                key = {'pokemonid-' + pokemon.name}
                name = {pokemon.name}
                url = {pokemon.url}
            />
        })

        return list;
    }

    return(
        <div className = 'flex flex-col items-center justify-center my-5'>
            <div className='pokemonCardsList rounded-md grid grid-cols-1 md:grid-cols-3'>
                { 
                    cardsList()
                }
            </div>
        </div>    
    )
}

export default SearchedPokemonCardsList;