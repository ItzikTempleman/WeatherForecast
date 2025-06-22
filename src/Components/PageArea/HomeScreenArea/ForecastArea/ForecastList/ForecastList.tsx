import "./ForecastList.css";
import {useSelector} from "react-redux";
import type {AppState} from "../../../../../Redux/Store.ts";
import {ForecastCard} from "../ForecastCard/ForecastCard.tsx";


export function ForecastList() {

    const forecastResponse = useSelector((state: AppState) => state.forecastInstances[0])


    const forecastDays= forecastResponse?.forecast?.forecastday;

    if (!forecastDays) return null;



    return (
        <div className="ForecastList">

            {forecastDays.map((day, index)=>(
                <ForecastCard key={index} forecast={day} />
            ))}
        </div>
    );
}
