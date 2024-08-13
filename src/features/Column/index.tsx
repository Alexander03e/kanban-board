import { FC, RefObject } from "react";
import styles from "./column.module.scss";
import { Card } from "../Card";
import { DropContainer } from "../Drag/components/DropContainer";
import cn from "classnames";
import { useAppSelector } from "@/shared/hooks/redux";

interface IProps {
    label: string;
    id: number;
}

export const Column: FC<IProps> = ({ label, id }) => {
    const tasks = useAppSelector((state) => state.board.tasks).filter(
        (task) => task.columnId === id
    );
    return (
        <DropContainer dropId={id}>
            {({ ref, className, ...props }) => (
                <div
                    ref={ref as RefObject<HTMLDivElement>}
                    className={cn(styles.wrapper, className)}
                    {...props}
                >
                    <div className={styles["column-heading"]}>{label}</div>
                    <div className={styles["column-content"]}>
                        {tasks?.map((card) => (
                            <Card key={card.id} {...card} />
                        ))}
                    </div>
                </div>
            )}
        </DropContainer>
    );
};
