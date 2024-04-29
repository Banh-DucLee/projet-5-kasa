import '../styles/Footer.scss';

import logoWhite from '../assets/images/logo_white.png';

function Footer() {
    return <footer>
        <img src={logoWhite} alt='Logo de Kasa'></img>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
}

export default Footer;