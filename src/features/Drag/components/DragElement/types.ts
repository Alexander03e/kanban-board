import { CSSProperties, RefObject } from "react";

export interface ChildrenProps {
    className?: string;
    styles?: CSSProperties;
    isPressed: boolean;
    // TODO: придумать что делать с типизацией позже
    ref: RefObject<unknown>;
}
