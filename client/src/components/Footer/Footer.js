import { useLocation } from 'react-router-dom';

import './Footer.css';

function Footer() {
    const path = useLocation().pathname;

    const shouldBeSticky = (path === '/register' || path === '/login' || path === '/create') ? true : false;

    return (
        <footer className={shouldBeSticky ? 'fixed-bottom' : null}>
            <p>Kermen &copy;</p>
        </footer>
    );
}

export default Footer;