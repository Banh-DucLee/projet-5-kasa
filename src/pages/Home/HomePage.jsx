import Banner from '../../components/Banner';
import Card from '../../components/Card';

import "../../styles/HomePage.scss";

import data from '../../assets/json/logements.json';
import backgroundImage from '../../assets/images/Paysage1.jpg';

function HomePage() {
    console.log(data);
    return <main>
        <Banner imageUrl={backgroundImage} text="Chez vous,<br /> partout et ailleurs" opacity="0.6"/>
        <div className="cards-container">
            {data.map((housing) => (
                <Card key={housing.id} housing={housing} />
            ))}
        </div>
    </main>
}

export default HomePage;