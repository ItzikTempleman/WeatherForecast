import "./MainLayout.css";
import {Header} from "../LayoutArea/Header/Header.tsx";
import {Menu} from "../LayoutArea/Menu/Menu.tsx";
import {Routing} from "../LayoutArea/Routing/Routing.tsx";
import {Copyrights} from "../LayoutArea/Copyrights/Copyrights.tsx";
import {useLocation} from "react-router-dom";

export function MainLayout() {
    const location = useLocation();

    const isAboutPage = location.pathname === "/about";
    return (
        <div className={`MainLayout ${isAboutPage ? "white-background" : ""}`}>

            <header>
                <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <Routing/>
            </main>
            <footer>
                <Copyrights/>
            </footer>
        </div>
    );
}
