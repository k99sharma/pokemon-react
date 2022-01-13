// importing Components
import PokemonCardsList from "../components/PokemonCardsList";
// import OptionsBar from "../components/OptionsBar";
import GoToTop from "../components/TopButton";
import PokemonHeader from "../components/PokemonHeader";

function Pokemon(){
    return(
        <>
            <GoToTop />
            <PokemonHeader />
            {/* <OptionsBar /> */}
            {/* <PokemonCardsList /> */}
        </>    
    );
}

export default Pokemon;