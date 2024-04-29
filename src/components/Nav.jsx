import { NavLink } from'react-router-dom';

function Nav() {
    return <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
    </nav>
}

export default Nav;