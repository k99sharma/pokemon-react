// importing Components
import PokemonCardsList from "../components/PokemonCardsList";
import GoToTop from "../components/TopButton";
import PokemonHeader from "../components/PokemonHeader";
import SearchedPokemonList from "../components/SearchedPokemonCardsList";
import { useState, useEffect } from "react";

function SearchingTemplate(){
    return(
        <h1>Hii</h1>
    )
}

function Pokemon(){
    const [isSearched, setIsSearched] = useState(false);
    const [isSearchButton, setIsSearchButton] = useState(false);
    const [pokemonFilteredList, setPokemonFilteredList] = useState([]);

    function searchPokemon(filteredList){
        setPokemonFilteredList(filteredList);
        console.log(filteredList);
    }

    function isSearching(searchInput, buttonState){
        if(searchInput.length !== 0)
            setIsSearched(true);
        else
            setIsSearched(false);

        setIsSearchButton(buttonState);
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
                     isSearchButton  ? 
                        <SearchedPokemonList list = {pokemonFilteredList} />
                            : 
                        <SearchingTemplate />
                    : 
                 <PokemonCardsList /> 
            }
        </>    
    );
}

export default Pokemon;