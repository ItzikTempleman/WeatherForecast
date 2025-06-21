import type {WeatherModel} from "../Models/Weather/WeatherModel.ts";
import {configureStore} from "@reduxjs/toolkit";
import {forecastSlice, weatherSlice} from "./WeatherSlice.ts";
import type {ForecastModel} from "../Models/Forecast/ForecastModel.ts";

export type AppState={
    weatherInstances:WeatherModel[],
    forecastInstances:ForecastModel[];
}



export const store= configureStore<AppState>(
    {
        reducer:
            {
                weatherInstances:weatherSlice.reducer,
                forecastInstances:forecastSlice.reducer
            }
    }
)