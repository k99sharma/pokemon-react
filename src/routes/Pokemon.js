// importing Components
import PokemonCardsList from "../components/PokemonCardsList";
import GoToTop from "../components/TopButton";
import PokemonHeader from "../components/PokemonHeader";
import SearchedPokemonList from "../components/SearchedPokemonCardsList";
import { useState, useEffect } from "react";


function Pokemon(){
    const [isSearched, setIsSearched] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [pokemonFilteredList, setPokemonFilteredList] = useState([]);

    function searchPokemon(filteredList){
        setPokemonFilteredList(filteredList);
        console.log(filteredList);
    }

    function isSearching(searchInput){
        if(searchInput.length > 0)
            setIsSearched(true);
        else
            setIsSearched(false);
    }

    return(
        <>
            <GoToTop />
            <PokemonHeader
                onSearch = { searchPokemon } 
                onSearching = { isSearching }    
            />
            
            { 
                isSearched ? 
                <SearchedPokemonList list = {pokemonFilteredList} /> : <PokemonCardsList /> 
            }
        </>    
    );
}

export default Pokemon;