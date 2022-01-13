import './SearchBar.css';

import { useState } from 'react';

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

export default SearchBar;