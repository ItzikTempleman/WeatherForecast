import "./ForecastCard.css";
import type {ForecastDay} from "../../../../../Models/Forecast/ForecastDay.ts";
import {formatTime} from "../../../../../Utils/TimeFormatter.ts";

type ForecastCardProps = {
    forecast: ForecastDay;
}

export function ForecastCard(forecastItem: ForecastCardProps) {
    const forecast = forecastItem.forecast;

    if (!forecast.hour || forecast.hour.length === 0) return <p>No data available</p>;
    const now = new Date();
    const futureHours = forecast.hour.filter(hourItem => {
            if (!hourItem.time) return false;
            const hourDate = new Date(hourItem.time)
            return hourDate > now;
        }
    )

    return (
        <div className="ForecastCard">
            <p className="forecast-date">{formatTime(forecast.date ?? "")}</p>
            {futureHours?.map((hourItem, index) => (
                <div key={index} className="forecast-item">
                    <div className="forecast-icon">
                        <img src={`https:${hourItem.condition?.icon}`}/>
                    </div>
                    <div className="forecast-time-and-condition">
                        <p>{hourItem.time?.split(" ")[1]}</p>
                        <p>{hourItem.condition?.text}</p>
                    </div>
                    <div className="forecast-temp">
                        <p>{hourItem.temp_c?.toFixed(0)}°</p>
                    </div>
                    <div className="extra-forecast-data">
                        <p>wind {hourItem.wind_kph?.toFixed(0)} km/h</p>
                        <p>humidity {hourItem.humidity?.toFixed(0)}%</p>
                    </div>
                    <div className="forecast-stats">
                        <p>feels like {hourItem.feelslike_c?.toFixed(0)}°</p>
                        <p>uv index {hourItem.uv?.toFixed(0)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}