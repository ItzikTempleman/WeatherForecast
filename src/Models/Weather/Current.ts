import type {Condition} from "./Condition.ts";

export class Current{
    public temp_c?: number;
    public condition?:Condition;
    public wind_kph?: number;
    public humidity?: number;
    public feelslike_c?:number;
    public uv?: number;
}