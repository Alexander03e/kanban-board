import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

type Props = PropsWithChildren;

export const Providers: FC<Props> = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};
