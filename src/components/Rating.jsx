import '../styles/Rating.scss';

import activeStar from '../assets/images/active-star.png';
import neutrakStar from '../assets/images/neutral-star.png';

function Rating({rating}) {
    return <div className="rating-container">
        {Array.from({length: 5}, (_, i) => (
            <img key={i} src={rating >= i + 1? activeStar : neutrakStar} alt="star" />
        ))}
    </div>
    
}

export default Rating;