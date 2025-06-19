import type {Condition} from "./Condition.ts";

export class Current{
    public temp_c?: number;
    public isDay?:boolean;
    public condition?:Condition;
    public wind_kph?: number;
    public precip_mm?: number;
    public humidity?: number;
    public cloud?: number;
    public feelslike_c?:number;
    public uv?: number;
}