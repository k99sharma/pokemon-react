import { Link } from 'react-router-dom';
import './Navbar.css';

// banner component
function Banner(){
    return(
        <div className = 'banner flex ml-3'>
            <img className = 'mr-2' width="40px" height="40px" src='/logo.png' alt="pokeball image" />
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