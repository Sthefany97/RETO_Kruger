import { Routes, Route, Link } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { BrowserRouter } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouters = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/*" element={<DashboardRoutes/>}/>
        </Routes>
        </BrowserRouter>
    )
}