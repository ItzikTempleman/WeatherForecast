import "./MainWeatherCard.css";

import {useSelector} from "react-redux";
import {type AppState} from "../../../../Redux/Store.ts";
import {useEffect, useState} from "react";

export function MainWeatherCard() {

    const [time, setTime] = useState("")

    useEffect(() => {
        const intervalId = setInterval(() => {
                const date = new Date()
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                setTime(`${hours}:${minutes}`)
            }, 1000
        );
        return () => clearInterval(intervalId);
    }, []);

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
                <div className="top-left-wrapper">
                    <p className="current-weather-text">Current weather</p>
                    <p className="time">{time}</p>
                </div>
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
                        <p>feels like {(current?.feelslike_c)?.toFixed(0)}°</p>
                    </div>
                </div>
            </div>

            <div className="extra-data">
                <div className="humidity">
                    <p>humidity</p>
                    <p>{(current?.humidity)?.toFixed(0)}%</p>
                </div>

                <div className="wind-speed">
                    <p>wind</p>
                    <p>{(current?.wind_kph)?.toFixed(0)} km/h</p>
                </div>

                <div className="uv">
                    <p>uv index (1..12)</p>
                    <p>{(current?.uv)?.toFixed(0)}</p>
                </div>
            </div>
        </div>
    );
}
