import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar className="justify-content-between" bg="success" sticky="top">
            <Nav className="ml-5">
                <Nav.Link href="#features" className="text-white">Catalog</Nav.Link>
            </Nav>
            <Navbar.Brand href="#home" className="text-white m-0">Kermen</Navbar.Brand>
            <Nav className="text-white mr-5">
                <Nav.Link href="#Login" className="text-white mr-3">Login</Nav.Link>
                <Nav.Link href="#Register" className="text-white">Register</Nav.Link>
            </Nav>
        </Navbar>
    );
}   

export default Header;