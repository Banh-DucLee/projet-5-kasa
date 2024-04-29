import { NavLink } from'react-router-dom';

import '../styles/Nav.scss';

import logoColor from '../assets/images/logo.png';

function Nav() {
    return <header>
        <img src={logoColor} alt='Logo de Kasa'></img>
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
        </nav>
    </header>
}

export default Nav;