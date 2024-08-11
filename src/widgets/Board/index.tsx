import { Column } from "@/features/Column";
import styles from "./board.module.scss";
import { DROP_ID } from "@/shared/enums/drag";

export const Board = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles["board-heading"]}>Kanban board</div>
            <div className={styles["column-wrapper"]}>
                <Column droppableId={DROP_ID.QUEUE} label="Очередь" />
                <Column droppableId={DROP_ID.IN_WORK} label="В работе" />
                <Column droppableId={DROP_ID.CHECKING} label="На проверке" />
                <Column droppableId={DROP_ID.DONE} label="Завершено" />
            </div>
        </div>
    );
};
