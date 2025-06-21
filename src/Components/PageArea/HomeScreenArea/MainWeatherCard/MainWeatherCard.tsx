import "./MainWeatherCard.css";

import {useSelector} from "react-redux";
import {type AppState} from "../../../../Redux/Store.ts";

export function MainWeatherCard() {

    const weather = useSelector((state: AppState) => (
            state.weatherInstances[0]
        )
    )
    if (!weather) return null;
    const {location, current} = weather;
    const iconUrl = current?.condition?.icon
        ? `https:${current.condition.icon}`
        : "";

    return (
        <div className="MainWeatherCard">
            <div className="top-info-wrapper">
                <div className="city-name">
                    <p>{location?.name}, {location?.country}</p>
                </div>

                <div className="basic-data-wrapper">
                    <div className="basic-data">
                        {iconUrl && (
                            <img className="icon" src={iconUrl}/>
                        )}
                        <p className="temp"> {(current?.temp_c)?.toFixed(0)}°</p>
                    </div>
                    <div className="stats">
                        <p>{current?.condition?.text}</p>
                        <p>Feels like: {(current?.feelslike_c)?.toFixed(0)}°</p>
                    </div>
                </div>

            </div>

            <p>Humidity: {current?.humidity}%</p>
            <p>Wind: {current?.wind_kph} km/h</p>
            <p>UV index: {current?.uv}</p>

        </div>
    );
}
