import { FC, HTMLAttributes } from "react";
import styles from "./page.module.scss";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export const Page: FC<IProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};
