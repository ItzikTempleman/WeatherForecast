import "./ForecastCard.css";

import type {ForecastDay} from "../../../../../Models/Forecast/ForecastDay.ts";


type ForecastCardProps = {
    forecast: ForecastDay;
}

export function ForecastCard(props: ForecastCardProps) {

    const forecast = props.forecast;
    console.log(forecast)

    if (!forecast.hour || forecast.hour.length === 0) {
        return (
            <div className="ForecastCard">
                <h3>{forecast.date}</h3>
                <><p>No hourly data available</p></>
            </div>
        );
    }

    return (
        <div className="ForecastCard">

            <div className="hour-list">

                {forecast.hour?.map((hour, index) => (
                    <div key={index} className="hour-entry">
                        <h3 className="forecast-date">{forecast.date}</h3>
                        <p>{hour.time?.split(" ")[1]}</p>
                        <p>{hour.temp_c?.toFixed(0)}°</p>
                        <p>{hour.condition?.text}</p>
                        {hour.condition?.icon && (
                            <img src={`https:${hour.condition.icon}`} />
                        )}
                        <p>Humidity: {hour.humidity?.toFixed(0)}%</p>
                        <p>Feels like: {hour.feelslike_c?.toFixed(0)}°</p>
                        <p>UV index: {hour.uv?.toFixed(0)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
