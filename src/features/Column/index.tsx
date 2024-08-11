import { FC } from "react";
import styles from "./column.module.scss";
import { Card } from "../Card";

interface IProps {
    label: string;
}

export const Column: FC<IProps> = ({ label }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles["column-heading"]}>{label}</div>
            <div className={styles["column-content"]}>
                <Card />
            </div>
        </div>
    );
};
