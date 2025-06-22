import axios from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import type {WeatherModel} from "../Models/Weather/WeatherModel.ts";
import {store} from "../Redux/Store.ts";
import {forecastSlice, weatherSlice} from "../Redux/WeatherSlice.ts";
import type {ForecastModel} from "../Models/Forecast/ForecastModel.ts";


class WeatherAndForecastService {
	public async getWeather(selectedCity:string):Promise<void>{
        const response = await axios.get<WeatherModel>(
            `${appConfig.weatherUrl}${appConfig.apikey}&q=${selectedCity}`
        )
        const weather= response.data;
        store.dispatch(weatherSlice.actions.initWeather(weather));
    }


    public async getForecast(selectedCity:string):Promise<void>{
            const response = await axios.get<ForecastModel>(
                `${appConfig.forecastUrl}${appConfig.apikey}&q=${selectedCity}&days=7&aqi=no&alerts=no`
            )
        const forecast= response.data;
        store.dispatch(forecastSlice.actions.initForecast(forecast))
    }
}

export const weatherAndForecastService = new WeatherAndForecastService();
