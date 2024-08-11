import { MutableRefObject, RefObject } from "react";

export const getElementParams = (ref: MutableRefObject<HTMLElement> | RefObject<HTMLElement>) => {

    return {
        width: ref.current?.offsetWidth,
        height: ref.current?.offsetHeight
    }
}