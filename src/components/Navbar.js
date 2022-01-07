import { Link } from 'react-router-dom';
import './Navbar.css';

// banner component
function Banner(){
    return(
        <div className = 'banner flex ml-3'>
            <img className = 'mr-2' width="30px" height="30px" src='/logo.png' alt="pokeball image" />
            Pokemon
        </div>
    );
}

function Navbar(){
    return(
        <nav className = 'flex items-center ml-5'>
            <Link to='/'>
                <Banner />
            </Link>
        </nav>
    );
}

export default Navbar;