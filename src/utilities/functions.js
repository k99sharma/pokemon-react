// utilities functions

// function to find correct id with correct prefix zeros
module.exports.correctId = (id)=>{
        let curr_id = id;
        let count = 0;

        while(curr_id !== 0){
            count += 1;
            curr_id = Math.floor(curr_id/10);
        }

        const totalZeros = 3 - count;
        const result = "0".repeat(totalZeros) + id;

        return result;
}

// function to fetch pokemons with limit
module.exports.fetchPokemonsList=(API, count, setState)=>{
    fetch(`${API}/?limit=${count}`)
        .then(res => res.json())
        .then(data => setState(data.results))
}