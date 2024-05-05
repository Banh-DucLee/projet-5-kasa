import { NavLink } from "react-router-dom";

import "../styles/Card.scss";

function Card ({housing}) {
    return <NavLink to={"/housing/"+housing.id} className="card">
        <div className="image-container">
            <img src={housing.cover} alt={housing.title}/>
            <span className="darkenLayer"></span>
        </div>
        <h2>{housing.title}</h2>
    </NavLink>
}
export default Card;