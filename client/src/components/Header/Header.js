import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
    return (
        <Navbar className="justify-content-between navigation-bar" bg="success" sticky="top">
            <Link className="ml-5 text-white nagivation-catalog" to="/catalog">Catalog</Link>
            <Link className="text-white position-absolute navigation-brand" to="/">Kermen</Link>
            <Nav className="text-white mr-5">
                <Link to="/login" className="text-white mr-3">Login</Link>
                <Link to="/register" className="text-white">Register</Link>
            </Nav>
        </Navbar>
    );
}

export default Header;