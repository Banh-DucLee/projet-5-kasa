import { NavLink } from "react-router-dom";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import '../../styles/ErrorPage.scss';

function ErrorPage() {
    return <>
        <Nav />
        <div className="error-page">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
        <Footer />
    </>
}

export default ErrorPage;