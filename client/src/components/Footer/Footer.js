import { useLocation } from 'react-router-dom';

import './Footer.css';

function Footer({
    match
}) {
    const path = useLocation().pathname;

    // const paths = ['/register', '/login', '/create'];
    const paths = ['/'];

    const shouldBeSticky = (!paths.includes(path)) ? true : false;

    return (
        <footer className={shouldBeSticky ? 'sticky-bottom' : null}>
            <p>Kermen &copy;</p>
        </footer>
    );
}

export default Footer;