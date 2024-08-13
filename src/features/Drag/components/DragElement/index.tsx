import { FC, MutableRefObject, ReactElement, useRef } from "react";
import { ChildrenProps } from "./types";
import { useMoveElement } from "@/shared/hooks/useMoveElement";

interface IProps {
    onDrop: (columnId: number) => void;
    children: (props: ChildrenProps) => ReactElement;
}

export const DragElement: FC<IProps> = ({ children, onDrop }) => {
    const dragRef = useRef<HTMLElement>(null);

    const { isPressed } = useMoveElement(
        dragRef as MutableRefObject<HTMLDivElement>,
        onDrop
    );

    return children({
        ref: dragRef,
        isPressed,
    });
};
