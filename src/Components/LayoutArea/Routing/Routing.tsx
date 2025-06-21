import "./Routing.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {Page404} from "../../PageArea/Page404/Page404.tsx";
import {Home} from "../../PageArea/HomeScreenArea/Home.tsx";

import {About} from "../../PageArea/About/About.tsx";


export function Routing() {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
