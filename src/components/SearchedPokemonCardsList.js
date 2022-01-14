function SearchedPokemonList(props){
    return(
            props.list.map(pokemon => {
                <h1>{ pokemon.name }</h1>
            })
    )
}

export default SearchedPokemonList;