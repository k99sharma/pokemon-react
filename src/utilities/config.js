// configuration values of application

const config_values = {
    POKEMON_API : 'https://pokeapi.co/api/v2/pokemon',
    POKEMON_COUNT : 12,
    TIMEOUT_INTERVAL : 1500,
    TOTAL_NUMBER_OF_POKEMONS : 1118,
    REGIONS: [
        {
            id: 1,
            name: "Kanto",
            startId: 1,
            endId: 151,
        },
        {
            id: 2,
            name: "Johto",
            startId: 152,
            endId: 251,
        },
        {
            id: 3,
            name: "Hoenn",
            startId: 252,
            endId: 386,
        },
        {
            id: 4,
            name: "Sinnoh",
            startId: 387,
            endId: 493,
        },
        {
            id: 5,
            name: "Unova",
            startId: 494,
            endId: 649
        },
        {
            id: 6,
            name: "Kalos",
            startId: 650,
            endId: 721,
        },     
    ],
    REGIONS_IDX: ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos"],
    TYPE_COLORS: {
        normal: "white",
        fire: "red",
        water: "blue",
        grass: "green",
        electric: "yellow",
        ice: "white",
        fighting: "brown",
        poison: "purple",
        ground: "yellow",
        flying: "cyan",
        psychic: "purple",
        bug: "green",
        rock: "brown",
        ghost: "blue",
        dragon: "blue",
        dark: "black",
        steel: "grey",
        fairy: "pink"
    }
}

export default config_values;