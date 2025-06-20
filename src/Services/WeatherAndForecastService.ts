import axios from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import type {WeatherModel} from "../Models/Weather/WeatherModel.ts";
import {store} from "../Redux/Store.ts";
import {weatherSlice} from "../Redux/WeatherSlice.ts";

class WeatherAndForecastService {
	public async getWeather(selectedCity:string):Promise<void>{
        const response = await axios.get<WeatherModel>(
            `${appConfig.weatherUrl}${appConfig.apikey}&q=${selectedCity}`
        )
        const weather= response.data;
        store.dispatch(weatherSlice.actions.initWeather(weather));
    }
}

export const weatherAndForecastService = new WeatherAndForecastService();
