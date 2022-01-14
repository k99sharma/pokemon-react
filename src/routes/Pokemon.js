// importing Components
import PokemonCardsList from "../components/PokemonCardsList";
import GoToTop from "../components/TopButton";
import PokemonHeader from "../components/PokemonHeader";
import SearchedPokemonCardsList from "../components/SearchedPokemonCardsList";
import { useState } from "react";

function SearchingTemplate(){
    return(
        <h1>Hii</h1>
    )
}

function Pokemon(){
    const [isSearched, setIsSearched] = useState(false);
    const [isSearchButton, setIsSearchButton] = useState(false);
    const [filterValue, setFilterValue] = useState("none");
    const [pokemonFilteredList, setPokemonFilteredList] = useState([]);

    function searchPokemon(filteredList){
        setPokemonFilteredList(filteredList);
    }

    function isSearching(searchInput, buttonState){
        if(searchInput.length !== 0)
            setIsSearched(true);
        else
            setIsSearched(false);

        setIsSearchButton(buttonState);
    }

    function isFilterOn(value){
        setFilterValue(value);
    }

    return(
        <>
            <GoToTop />
            <PokemonHeader
                onSearch = { searchPokemon } 
                onSearching = { isSearching }  
                onFilter = { isFilterOn }
            />
            
            { 
                isSearched ? 
                     isSearchButton  ? 
                        <SearchedPokemonCardsList 
                            pokemonList = {pokemonFilteredList}
                            regionFilter = {filterValue}
                        />
                            : 
                        <SearchingTemplate />
                    : 
                 <PokemonCardsList 
                    regionFilter = {filterValue}
                 /> 
            }
        </>    
    );
}

export default Pokemon;