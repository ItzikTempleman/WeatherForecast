import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {WeatherModel} from "../Models/Weather/WeatherModel.ts";


function initWeather(_history:WeatherModel[],action:PayloadAction<WeatherModel>){
    return [action.payload];
}



// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const weatherSlice=createSlice<WeatherModel[]>(
    {
        name:"weatherSlice",
        initialState:[],
        reducers:{
            initWeather
        }
    }
)

