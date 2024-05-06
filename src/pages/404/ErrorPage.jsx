import { NavLink } from "react-router-dom";

import '../../styles/ErrorPage.scss';

function ErrorPage() {
    return <>
        <div className="error-page">
            <h1>404</h1>
            <h2>Oups! La page que<br></br> vous demandez n'existe pas.</h2>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    </>
}

export default ErrorPage;