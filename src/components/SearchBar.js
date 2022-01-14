import './SearchBar.css';

import { useState, useEffect } from 'react';

function SearchBar(props){
    const [ searchInput, setSearchInput ] = useState('');
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);

    function filterSearch(){
        const filteredResults = [];
        
        props.fullPokemonList.map(pokemon => {
            if(pokemon.name.length > searchInput.length){
                const pokemonNameSubstring = pokemon.name.slice(0, searchInput.length);
                if(pokemonNameSubstring === searchInput)
                    filteredResults.push(pokemon);
            }   
        });

        setFilteredPokemonList(filteredResults);
        if(filteredResults.length > 0 && searchInput.length > 0){
            props.onSearch(filteredResults);
        }else{
            props.onSearch(filteredResults);
        }   
    }

    useEffect(()=>{
        props.onSearching(searchInput, false);
    }, [searchInput])

    useEffect(()=>{
        props.onSearching(searchInput, true)
    }, [filteredPokemonList])

    return(
        <>
            <div className = 'searchBar shadow-md'>
                <input 
                    className = 'searchBar__input p-2 rounded-md' 
                    type = 'text' 
                    placeholder = 'Enter Pokemon Name'
                    onChange = { e =>  setSearchInput(e.target.value.toLowerCase().trim()) }
                    value = { searchInput }
                />
            </div>
            <button onClick = { filterSearch } className = 'searchButton p-2 rounded-md shadow-md'>Search</button>
        </>
    )
}

export default SearchBar;