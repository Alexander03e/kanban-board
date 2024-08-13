import { routesConfig } from "@/shared/config/routes";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
    return (
        <Routes>
            {Object.values(routesConfig()).map((route, i) => (
                <Route key={i} element={route.component()} path={route.path} />
            ))}
        </Routes>
    );
};
