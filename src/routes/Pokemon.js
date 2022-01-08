// importing Components
import PokemonCardsList from "../components/PokemonCardsList";
import GoToTop from "../components/TopButton";

function Pokemon(){
    return(
        <>
            <GoToTop />
            <PokemonCardsList />
        </>    
    );
}

export default Pokemon;