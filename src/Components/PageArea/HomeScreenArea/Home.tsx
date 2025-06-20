import "./Home.css";
import {LocationSelector} from "./LocationSelector/LocationSelector.tsx";
import {MainWeatherCard} from "./MainWeatherCard/MainWeatherCard.tsx";

export function Home() {
    return (
        <div className="Home">
            <LocationSelector/>
            <MainWeatherCard/>
        </div>
    );
}
