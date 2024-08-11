import { FC, HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IProps> = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};
