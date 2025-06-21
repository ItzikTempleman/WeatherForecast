import type {Location} from "../Weather/Location.ts";
import type {Current} from "../Weather/Current.ts";
import {Forecast} from "./ForecastToday.ts";

export class ForecastModel {
    public location?: Location;
    public current?: Current;
    public forecast?: Forecast
}
