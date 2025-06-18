import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {MainLayout} from "./Components/MainLayout/MainLayout.tsx";
import {ThemeProvider} from "@mui/material";
import {muiTheme} from "./Theme/Theme.ts";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={muiTheme}>
            <MainLayout/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
)
