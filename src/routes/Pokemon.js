// importing Components
import PokemonCardsList from "../components/PokemonCardsList";
import OptionsBar from "../components/OptionsBar";
import GoToTop from "../components/TopButton";

function Pokemon(){
    return(
        <>
            <GoToTop />
            <OptionsBar />
            <PokemonCardsList />
        </>    
    );
}

export default Pokemon;