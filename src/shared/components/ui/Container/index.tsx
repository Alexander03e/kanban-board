import { FC, HTMLAttributes } from "react";
import styles from "./container.module.scss";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<IProps> = ({ children, ...props }) => {
    return (
        <div className={styles.wrapper} {...props}>
            {children}
        </div>
    );
};
