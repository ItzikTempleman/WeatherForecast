import "./ForecastCard.css";
import type {ForecastModel} from "../../../../../Models/Forecast/ForecastModel.ts";


type ForecastCardProps={
    forecast:ForecastModel;
}

export function ForecastCard(props: ForecastCardProps) {




    return (
        <div className="ForecastCard">

		{/*<p>{props?.forecast?.forecast?.forecastday?.[0]?.hour[0]?.temp_c}</p>*/}

        </div>
    );
}
