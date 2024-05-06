import { useParams } from "react-router-dom";

import ErrorPage from "../../pages/404/ErrorPage";

import data from "../../assets/json/logements.json";

function HousingPage() {
    const { id } = useParams();
    const housing = data.find(housing => housing.id === id);

    if (!housing) {
        return <ErrorPage />
    } else {
        return <main>
            <h1>{housing.title}</h1>
            <img src={housing.cover} />
        </main>
    }
}

export default HousingPage;