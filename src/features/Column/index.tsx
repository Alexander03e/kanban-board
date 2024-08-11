import { FC } from "react";
import styles from "./column.module.scss";
import { Card } from "../Card";

interface IProps {
    label: string;
    droppableId: string;
}

export const Column: FC<IProps> = ({ label, droppableId }) => {
    return (
        <div
            droppable-element
            droppable-id={droppableId}
            className={styles.wrapper}
        >
            <div className={styles["column-heading"]}>{label}</div>
            <div className={styles["column-content"]}>
                <Card />
            </div>
        </div>
    );
};
