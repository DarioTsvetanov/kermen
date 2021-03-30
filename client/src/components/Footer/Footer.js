import { useLocation } from 'react-router-dom';

import './Footer.css';

function Footer() {
    const path = useLocation().pathname;
    
    return (
        <footer className={(path === '/register' || path === '/login') ? 'fixed-bottom' : null}>
            <p>Kermen &copy;</p>
        </footer>
    );
}

export default Footer;