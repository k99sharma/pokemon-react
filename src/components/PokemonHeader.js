import './PokemonHeader.css';

// importing components
import Filter from './Filter';
import SearchBar from './SearchBar';

// pokemon header component
function PokemonHeader(props){
    return(
        <div className = 'flex justify-center items-center my-4'>
            <div className = 'header p-4 rounded-md shadow-lg bg-white'>
                <img className = 'mb-5' width = '30%' src = '/pokemonLogo.svg' alt = 'pokemon logo' />

                <div className = 'flex items-center justify-around p-3'>
                    <SearchBar 
                        onSearch = { props.onSearch } 
                        onSearching = { props.onSearching }
                        fullPokemonList = { props.fullPokemonList }
                    />
                    <Filter onFilter = { props.onFilter } />
                </div>
            </div>
        </div>    
    )
}

export default PokemonHeader;