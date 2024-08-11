import { ReactElement } from "react";

export interface IRoutes {
    [key: string]: IRoute
}

export interface IRoute {
    component: () => ReactElement
    path: string;
    id: string
}