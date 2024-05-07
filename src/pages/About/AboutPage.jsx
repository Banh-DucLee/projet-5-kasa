import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

import "../../styles/AboutPage.scss";

import data from "../../assets/json/about.json"
import backgroundImage from "../../assets/images/Paysage2.jpg";

function AboutPage() {
    return <main>
        <Banner imageUrl={backgroundImage} opacity="0.3"/>
        <div className="collapse-container">
            {data.map((item) => (
                <Collapse key={item.title} data={item} />
            ))}
        </div>
    </main>
}

export default AboutPage;