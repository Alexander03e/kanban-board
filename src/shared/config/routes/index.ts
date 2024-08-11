import { HomePage } from "@/pages/Home";
import { IRoutes } from "./routes.types";

export const routesConfig: () => IRoutes  = () => ({
    'home': {
        id: 'home-page',
        component: HomePage,
        path: '/'
    }
})

/** Массив из роутов, по которым будет открыто боковое меню */
export const menuRoutesConfig = ['/']