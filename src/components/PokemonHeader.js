import './PokemonHeader.css';

import { useState } from 'react';

function Filter(){
    return(
        <div className = 'filter flex justify-center align-center'>
            <select className = 'filter__select p-2 rounded-md'>
                <option className = 'filter__select__option' value = 'Filter'>Filter</option>
                <option className = 'filter__select__option' value = 'filer 2'>Filter 2</option>
                <option className = 'filter__select__option' value = 'filter 3'>Filter 3</option>
            </select>
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
        <div className = 'searchBar shadow-md'>
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
        <div className = 'flex items-center justify-evenly p-3'>
            <SearchBar />
            <Filter />
        </div>
    )
}

function PokemonHeader(){
    return(
        <div className = 'flex justify-center items-center my-4'>
            <div className = 'header p-4 rounded-md shadow-lg'>
                <img className = 'mb-5' width = '30%' src = '/pokemonLogo.svg' alt = '' />

                <Menu />
            </div>
        </div>    
    )
}

export default PokemonHeader;