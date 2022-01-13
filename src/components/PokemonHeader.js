import './PokemonHeader.css';

import { useState } from 'react';

// importing components
import Filter from './Filter';
import SearchBar from './SearchBar';

// menu component
function Menu(){
    return(
        <div className = 'flex items-center justify-around p-3'>
            <SearchBar />
            <Filter />
        </div>
    )
}

// pokemon header component
function PokemonHeader(){
    return(
        <div className = 'flex justify-center items-center my-4'>
            <div className = 'header p-4 rounded-md shadow-lg bg-white'>
                <img className = 'mb-5' width = '30%' src = '/pokemonLogo.svg' alt = 'pokemon logo' />

                <Menu />
            </div>
        </div>    
    )
}

export default PokemonHeader;