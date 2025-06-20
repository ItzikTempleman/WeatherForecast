import type {WeatherModel} from "../Models/Weather/WeatherModel.ts";
import {configureStore} from "@reduxjs/toolkit";
import {weatherSlice} from "./WeatherSlice.ts";

export type AppState={
    weatherInstances:WeatherModel[];
}


export const store= configureStore<AppState>(
    {
        reducer:
            {
                weatherInstances:weatherSlice.reducer
            }
    }
)