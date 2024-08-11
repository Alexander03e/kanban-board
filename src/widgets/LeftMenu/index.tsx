import styles from "./leftMenu.module.css";
import { FC, HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export const LeftMenu: FC<IProps> = () => {
    return <div className={styles.wrapper}>left menu</div>;
};
