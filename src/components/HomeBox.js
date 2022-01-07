import './HomeBox.css';
import { Link } from 'react-router-dom';

function Pikachu(){
    return(<img src="/homeImage.png" alt="home image" />);
}

function GoButton(){
    return(
        <Link to='/pokemon'>
            <button className='exploreButton flex items-center justify-center hover:bg-amber-500 shadow-xl'>
                Explore
            </button>
        </Link>
    );
}

function Content(){
    return(
        <>
            <div className = 'content__illustration p-3'>
                <img src='/pokemonLogo.svg' alt='pokemon logo' />
            </div>

            <div className = 'content__pikachu__illustration md:hidden'>
                <Pikachu />
            </div>

            <div className = 'flex justify-center align-center'>
                <div className = 'content__content flex justify-center flex-col'>
                    <div className = 'content__text my-5'>
                        Learn More About Your Favourite Pokemons
                    </div>

                    <div className = 'content__button'>
                        <GoButton />
                    </div>
                </div>     
            </div>   
        </>
    );
}

function HomeBox(){
    return(
        <div className = 'homeBox grid grid-cols-1 shadow-lg md:grid-cols-2'>
            <div className = 'p-5'>
                <Content />    
            </div>

            <div className='hidden md:flex items-center justify-items-center p-5'>
                <Pikachu />
            </div>
        </div>
    );
}

export default HomeBox;