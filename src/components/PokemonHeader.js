import './PokemonHeader.css';

import { useState } from 'react';

function Filter(){
    return(
        <div className = 'filter'>
            filter
        </div>
    )
}

function SearchBar(){
    const [ searchInput, setSearchInput ] = useState('');

    // input handler function 
    function inputHandler(event){
        setSearchInput(event.target.value);

        event.preventDefault();
    }

    return(
        <div className = 'searchBar'>
            <input 
                className = 'searchBar__input p-2 rounded-md' 
                type = 'text' 
                placeholder = 'Enter Pokemon Name or Number'
                onChange = { inputHandler }
                value = { searchInput }
            />
        </div>
    )
}


function Menu(){
    return(
        <div className = 'flex items-center justify-around p-3'>
            <SearchBar />
            <Filter />
        </div>
    )
}

function PokemonHeader(){
    return(
        <div className = 'flex justify-center items-center my-4'>
            <div className = 'header p-3 rounded-md shadow-lg'>
                <img className = 'mb-5' width = '30%' src = '/pokemonLogo.svg' alt = '' />

                <Menu />
            </div>
        </div>    
    )
}

export default PokemonHeader;