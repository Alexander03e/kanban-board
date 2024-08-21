import { FC, MutableRefObject, ReactElement, useEffect, useRef } from "react";
import { ChildrenProps } from "./types";
import { useMoveElement } from "@/shared/hooks/useMoveElement";
import styles from "./element.module.scss";

interface IProps {
    onDrop: (columnId: number) => void;
    columnId: string;
    order: number;
    children: (props: ChildrenProps) => ReactElement;
}

export const DragElement: FC<IProps> = ({ children, onDrop, ...props }) => {
    const dragRef = useRef<HTMLElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);

    const { isPressed, mouseStart } = useMoveElement(
        dragRef as MutableRefObject<HTMLDivElement>,
        onDrop
    );

    useEffect(() => {
        const drag = dragRef.current;
        const shadow = shadowRef.current;

        if (drag && shadow && isPressed) {
            shadow.style.width = drag.style.width;
            shadow.style.height = drag.style.height;
            shadow.style.borderRadius = drag.style.borderRadius;
        }
    }, [dragRef.current, shadowRef.current, isPressed]);

    return (
        <>
            {children({
                ref: dragRef,
                onPointerDown: mouseStart,
                isPressed,
                className: styles.element,
                ...props,
            })}
            {isPressed && (
                <div ref={shadowRef} style={{ backgroundColor: "gray" }} />
            )}
        </>
    );
};
