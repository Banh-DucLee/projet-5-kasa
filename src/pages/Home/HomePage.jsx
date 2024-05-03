import Banner from '../../components/Banner';

import "../../styles/HomePage.scss";

import backgroundImage from '../../assets/images/Paysage1.jpg';

function HomePage() {
    return <main>
        <Banner imageUrl={backgroundImage} text="Chez vous,<br /> partout et ailleurs" opacity="0.6"/>
    </main>
}

export default HomePage;