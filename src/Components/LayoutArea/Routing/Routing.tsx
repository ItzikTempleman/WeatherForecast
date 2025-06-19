import "./Routing.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {Page404} from "../../PageArea/Page404/Page404.tsx";
import {Home} from "../../PageArea/Home/Home.tsx";
import {Forecast} from "../../PageArea/Forecast/Forecast.tsx";

export function Routing() {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/forecast" element={<Forecast/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
