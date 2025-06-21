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
            <h2>{location?.name}, {location?.country}</h2>
            <p>{current?.condition?.text}</p>
            <p>Temp: {current?.temp_c}°C</p>
            <p>Humidity: {current?.humidity}%</p>
            <p>Feels like: {current?.feelslike_c}°C</p>
            <p>Wind: {current?.wind_kph} km/h</p>
            <p>UV index: {current?.uv}</p>

            {iconUrl && (
                <img
                    src={iconUrl}
                />
            )}
        </div>
    );
}
