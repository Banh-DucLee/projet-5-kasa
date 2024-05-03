import Banner from "../../components/Banner";

import "../../styles/AboutPage.scss";

import backgroundImage from "../../assets/images/Paysage2.jpg";

function AboutPage() {
    return <main>
        <Banner imageUrl={backgroundImage} opacity="0.3"/>
    </main>
}

export default AboutPage;