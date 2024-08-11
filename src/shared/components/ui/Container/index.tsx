import { FC, HTMLAttributes } from "react";
import styles from "./container.module.css";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<IProps> = ({ children, ...props }) => {
    return (
        <div className={styles.wrapper} {...props}>
            {children}
        </div>
    );
};
