import { useParams } from "react-router-dom";

import ErrorPage from "../../pages/404/ErrorPage";
import Rating from "../../components/Rating";

import '../../styles/HousingPage.scss';

import data from "../../assets/json/logements.json";
import Carrousel from "../../components/Carrousel";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";

function HousingPage() {
    const { id } = useParams();
    const housing = data.find(housing => housing.id === id);

    if (!housing) {
        return <ErrorPage />
    } else {
        return <main>
            <Carrousel images={housing.pictures}/>
            <div className="housing-content">
                <div className="housing-title">
                    <h1>{housing.title}</h1>
                    <h2>{housing.location}</h2>
                    <Tag tags={housing.tags} />
                </div>
                <div className="housing-host-container">
                    <div className="housing-host">
                        <h3>{housing.host.name}</h3>
                        <img src={housing.host.picture} alt="avatar" />
                    </div>
                    <Rating rating={housing.rating} />
                </div>
            </div>
            <div className="housing-collapse-container">
                <Collapse data={{title: "Description", description: housing.description}} />
                <Collapse data={{title: "Équipements", description: <span dangerouslySetInnerHTML={ {__html: housing.equipments.join('<br />')} } />,}} />
            </div>
        </main>
    }
}

export default HousingPage;