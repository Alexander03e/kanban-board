import { Column } from "@/features/Column";
import styles from "./board.module.scss";

export const Board = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles["board-heading"]}>Kanban board</div>
            <div className={styles["column-wrapper"]}>
                <Column label="Очередь" />
                <Column label="В работе" />
                <Column label="На проверке" />
                <Column label="Завершено" />
            </div>
        </div>
    );
};
