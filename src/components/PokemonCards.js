import { useState, useEffect } from 'react';

import './PokemonCards.css';


function PokemonCards(props){
    const [pokemonData, setPokemonData] = useState({
        image_url: '',
    });

    useEffect(()=>{
        fetch(props.url)
            .then(res => res.json())
            .then(data => {
                setPokemonData({
                    id: data.id,
                    image_url: data.sprites.front_default,
                })
            });
    }, [])

    return(
        <div className = 'cardContainer m-3 p-2'>
            <div className = 'card flex flex-col'>
                <div className = 'card__image flex items-center justify-center'>
                    <img width="200px" height="200px" src = {pokemonData.image_url} alt = {props.name + 'image'} />
                </div>

                <div className = 'card__description'>
                    <div className = 'card__subtitle px-3'>
                        { "#" + pokemonData.id }
                    </div>
                    <div className = 'card__title p-3'>
                        { props.name.toUpperCase() }
                    </div>
                </div>      
            </div>
        </div>
    );
}

export default PokemonCards;