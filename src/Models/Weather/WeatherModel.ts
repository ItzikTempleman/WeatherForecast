import type {Current} from "./Current.ts";
import type {Location} from "./Location.ts";

export class WeatherModel {
    public location?: Location;
    public current?: Current;
}
