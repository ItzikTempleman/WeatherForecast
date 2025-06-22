import "./Home.css";
import {MainWeatherCard} from "./MainWeatherCard/MainWeatherCard.tsx";
import {ForecastList} from "./ForecastArea/ForecastList/ForecastList.tsx";

export function Home() {
    return (
        <div className="Home">

            <MainWeatherCard/>
            <ForecastList/>
        </div>
    );
}
