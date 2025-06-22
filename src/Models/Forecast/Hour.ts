import type {Condition} from "../Weather/Condition.ts";

export class Hour {
    public time?: string;
    public temp_c?: number;
    public condition?: Condition;
    public humidity?: number;
    public feelslike_c?: number;
    public uv?: number;
}
