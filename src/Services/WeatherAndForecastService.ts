import type {WeatherModel} from "../Models/Weather/WeatherModel.ts";
import {appConfig} from "../Utils/AppConfig.ts";
import axios from "axios";

class WeatherAndForecastService {
	public async getWeather(selectedCity:string):Promise<WeatherModel>{
        const response = await axios.get<WeatherModel>(
            `${appConfig.weatherUrl}${appConfig.apikey}&q=${selectedCity}`
        )
        return response.data;
    }
}

export const weatherAndForecastService = new WeatherAndForecastService();
