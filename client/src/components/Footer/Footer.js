import { useHistory } from 'react-router-dom';

import './Footer.css';

function Footer() {
    const history = useHistory();

    console.log(history.location.pathname);
    return (
        <footer className={history.location.pathname === '/' ? null : "fixed-bottom"}>
            <p>Kermen &copy;</p>
        </footer>
    );
}

export default Footer;