import { useState } from "react";

import arrowImage from "../assets/images/Vector.png";

import "../styles/Collapse.scss";

function Collapse({data}) {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="collapse">
        <div className="collapse-header">
            <h2 className="collapse-title">{data.title}</h2>
            <button className={`collapse-button ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <img src={arrowImage} alt="arrow" />
            </button>
        </div>
        <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
            <p>{data.description}</p>
        </div>
    </div>
}

export default Collapse;