import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {WeatherModel} from "../Models/Weather/WeatherModel.ts";
import {ForecastModel} from "../Models/Forecast/ForecastModel.ts";


function initWeather(_history: WeatherModel[], action: PayloadAction<WeatherModel>):WeatherModel[] {
    return [action.payload];
}

function initForecast(_history: ForecastModel[], action: PayloadAction<ForecastModel>):ForecastModel[] {
    return [action.payload];
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const weatherSlice = createSlice<WeatherModel[]>(
    {
        name: "weatherSlice",
        initialState: [],
        reducers: {
            initWeather
        }
    }
)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const forecastSlice = createSlice<ForecastModel[]>(
    {
        name: "forecastSlice",
        initialState: [],
        reducers: {
            initForecast
        }
    }
)

