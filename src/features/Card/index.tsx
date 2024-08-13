import { forwardRef, ReactElement, RefObject } from "react";
import styles from "./card.module.scss";
import cn from "classnames";

import { DragElement } from "../Drag/components/DragElement";
import { useAppDispatch } from "@/shared/hooks/redux";
import { changeColumn } from "@/shared/store/board/slice";

interface IProps {
    id: number;
    columnId: number;
    label: string;
}

export const Card = forwardRef<HTMLDivElement, IProps>(
    ({ id, columnId, label }): ReactElement => {
        const dispatch = useAppDispatch();

        const onDrop = (columnId: number) => {
            dispatch(changeColumn({ id, columnId }));
            // console.log(`dropped ${columnId}`);
        };

        return (
            <DragElement onDrop={onDrop}>
                {({ isPressed, ref, ...props }) => (
                    <div
                        className={cn(styles.card, {
                            [styles.dragging]: isPressed,
                        })}
                        ref={ref as RefObject<HTMLDivElement>}
                        {...props}
                    >
                        {String(isPressed)}
                        {label}
                        {columnId}
                        id: {id}
                    </div>
                )}
            </DragElement>
        );
    }
);
