import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {MainLayout} from "./Components/MainLayout/MainLayout.tsx";
import {ThemeProvider} from "@mui/material";
import {muiTheme} from "./Theme/Theme.ts";
import {Provider} from "react-redux";
import {store} from "./Redux/Store.ts";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={muiTheme}>
            <MainLayout/>
            </ThemeProvider>
        </BrowserRouter>
        </Provider>
    </StrictMode>,
)
