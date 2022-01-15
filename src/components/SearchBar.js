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
        <div className = 'searchBar flex grow justify-around my-5'>
            <div className = 'searchBar__input w-8/12 border-2 border-transparent hover:border-blue-600 rounded-md'>
                <input 
                    className = 'p-2 rounded-md w-full outline-none' 
                    type = 'text' 
                    placeholder = 'Enter Pokemon Name'
                    onChange = { e =>  setSearchInput(e.target.value.toLowerCase().trim()) }
                    value = { searchInput }
                />
            </div>

            <button onClick = { filterSearch } className = 'searchBar__button flex justify-around md:w-2/12 font-medium bg-blue-100 hover:bg-blue-200 text-blue-600 border-2 border-transparent hover:border-blue-600 p-2 rounded-md shadow-md'>
                <span className = 'hidden md:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                    Search
            </button>
        </div>
    )
}

export default SearchBar;