import { Column } from "@/features/Column";
import styles from "./board.module.scss";
import { mockColumns } from "./mocks";

export const Board = () => {
    const columns = mockColumns;

    return (
        <div className={styles.wrapper}>
            <div className={styles["board-heading"]}>
                Kanban board/ testing cherry-pick / testing2
            </div>
            <div className={styles["column-wrapper"]}>
                {columns.map((item) => (
                    <Column key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};
