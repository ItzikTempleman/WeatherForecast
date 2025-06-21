import type {Condition} from "../Weather/Condition.ts";

export class Hour {
    public time?: string;
    public temp_c?: number;
    condition?: Condition;
    humidity?: number;
    feelslike_c?: number;
    public uv?: number;
}
