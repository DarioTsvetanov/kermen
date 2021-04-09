import { useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
    const {isAuthenticated, username} = useContext(AuthContext);

    return (
        <>
            {isAuthenticated ?
                <Navbar className="justify-content-between navigation-bar" bg="success" sticky="top">
                    <Nav className="nagivation-catalog-link">
                        <Link className="text-white" to="/catalog">Catalog</Link>
                        <Link className="text-white nagivation-catalog-link" to="/create">Create</Link>
                    </Nav>
                    <Link className="text-white position-absolute navigation-brand" to="/">Kermen</Link>
                    <Nav className="text-white navigation-authentication-links">
                        <Link to="/logout" className="text-white">Logout</Link>
                    </Nav>
                </Navbar> :

                <Navbar className="justify-content-between navigation-bar" bg="success" sticky="top">
                    <Link className="text-white position-absolute navigation-brand" to="/">Kermen</Link>
                    <Nav className="text-white navigation-authentication-links">
                        <Link to="/login" className="text-white mr-3">Login</Link>
                        <Link to="/register" className="text-white mr-3">Register</Link>
                    </Nav>
                </Navbar>
            }

        </>
    );
}

export default Header;