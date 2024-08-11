import {
    forwardRef,
    MutableRefObject,
    ReactElement,
    RefObject,
    useRef,
} from "react";
import styles from "./card.module.css";
import cn from "classnames";
import { useMoveElement } from "@/hooks/useMoveElement";
import { useMergeRefs } from "@/hooks/useMergeRefs";

interface IProps {}

export const Card = forwardRef<HTMLDivElement, IProps>(
    ({ ...props }, ref): ReactElement => {
        const cardRef = useRef<HTMLDivElement>(null);

        const { isPressed, position } = useMoveElement<HTMLDivElement>(
            cardRef as MutableRefObject<HTMLDivElement>
        );

        const mergeRef = useMergeRefs<HTMLDivElement>(
            cardRef,
            ref as RefObject<HTMLDivElement>
        );

        return (
            <div
                id="card"
                className={cn(styles.card, { [styles.dragging]: isPressed })}
                ref={mergeRef}
                {...props}
            >
                {String(isPressed)}
                X: {position.x}
                Y: {position.y}
            </div>
        );
    }
);
