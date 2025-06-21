import "./Header.css";
import {LocationSelector} from "./LocationSelector/LocationSelector.tsx";

export function Header() {
    return (

<span className="Header">
           <h3>Weather finder</h3>
            <LocationSelector/>
</span>
    );
}
