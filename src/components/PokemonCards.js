import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PokemonCards.css';

import { correctId } from '../utilities/functions';


function PokemonCards(props){
    const [pokemonData, setPokemonData] = useState({
        id: 0,
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
            <Link to='#'>
                <div className = 'card rounded-md flex flex-col'>
                    <div className = 'card__image flex items-center justify-center'>
                        <img width="200px" height="200px" src = {pokemonData.image_url} alt = {props.name} />
                    </div>

                    <div className = 'card__description'>
                        <div className = 'card__subtitle px-3'>
                            { "#" + correctId(pokemonData.id) }
                        </div>
                        <div className = 'card__title p-3'>
                            { props.name.toUpperCase() }
                        </div>
                    </div>      
                </div>
            </Link> 
        </div>
    );
}

export default PokemonCards;