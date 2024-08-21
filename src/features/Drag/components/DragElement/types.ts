import { CSSProperties, PointerEventHandler, RefObject } from "react";

export interface ChildrenProps {
    className?: string;
    styles?: CSSProperties;
    isPressed: boolean;
    onPointerDown?: PointerEventHandler<HTMLElement>;
    // TODO: придумать что делать с типизацией позже
    ref: RefObject<unknown>;
    // columnId: string;
    // order: string;
}
