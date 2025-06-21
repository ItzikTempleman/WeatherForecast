class AppConfig {
    public readonly weatherUrl  = `https://api.weatherapi.com/v1/current.json?key=`
    public readonly forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=`
    public readonly apikey= `49766b5882c44ee8a0341421250705`
}

export const appConfig = new AppConfig();
