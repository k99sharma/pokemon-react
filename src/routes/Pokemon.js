// importing Components
import PokemonCardsList from "../components/PokemonCardsList";
import GoToTop from "../components/TopButton";
import PokemonHeader from "../components/PokemonHeader";
import SearchedPokemonList from "../components/SearchedPokemonCardsList";
import { useState, useEffect } from "react";


function Pokemon(){
    const [isSearched, setIsSearched] = useState(false);
    const [pokemonFilteredList, setPokemonFilteredList] = useState([]);

    function searchPokemon(filteredList){
        if(filteredList.length > 0){
            setPokemonFilteredList(filteredList);
        }
            
        else{
            setPokemonFilteredList([]);
        }

        console.log(filteredList);
    }

    useEffect(()=>{
        (pokemonFilteredList.length > 0 ? setIsSearched(true) : setIsSearched(false))
    }, [pokemonFilteredList]);

    return(
        <>
            <GoToTop />
            <PokemonHeader onSearch = { searchPokemon } />
            
            { 
                isSearched ? 
                <SearchedPokemonList list = {pokemonFilteredList} /> : <PokemonCardsList /> 
            }
        </>    
    );
}

export default Pokemon;