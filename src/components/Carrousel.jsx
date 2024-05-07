import { useState } from "react";

import '../styles/Carrousel.scss';

import arrowImage from "../assets/images/carrousel-arrow.png";

function Carrousel({images}) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="carrousel-container">
            <div className="carrousel-image">
                <img className="active-image" src={images[activeImage]} alt="carrousel-image" />
            </div>
            <div className={`${images.length === 1 ? 'hide' : 'carrousel-controls'}`}>
                <div className="carrousel-control-button">
                    <button className="carrousel-control-button-previous" onClick={() => 
                        {
                        if (activeImage - 1 < 0) {
                            setActiveImage(images.length - 1);
                        } else {
                            setActiveImage(activeImage - 1);
                        }
                        }}>
                        <img src={arrowImage} alt="previous-arrow" />
                    </button>
                    <button className="carrousel-control-button-next" onClick={() => 
                        {
                        if (activeImage + 1 >= images.length) {
                            setActiveImage(0);
                        } else {
                            setActiveImage(activeImage + 1);
                        }
                        }}>
                        <img src={arrowImage} alt="previous-arrow" />
                    </button>
                </div>
                <div className="carrousel-indicators">
                    <p>{activeImage + 1}/{images.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Carrousel;