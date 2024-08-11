import { FC, HTMLAttributes } from "react";
import styles from "./page.module.css";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export const Page: FC<IProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};
