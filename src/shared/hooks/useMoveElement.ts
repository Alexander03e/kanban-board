import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "./redux";
import { setDraggable } from "../store/board/slice";

/**
 * Хук для перетаскивания элементов и отслеживания его координат.
 */
export const useMoveElement = <T extends HTMLElement>(
    ref: MutableRefObject<T>,
    onDrop: (columnId: number) => void
) => {
    const dispatch = useAppDispatch();
    const [isPressed, setIsPressed] = useState(false);

    const startPointerPosition = useRef<{
        top: number;
        left: number;
        absoluteLeft: number;
        absoluteTop: number;
    }>();
    const originWidth = useRef<{ width: number; height: number }>();

    const mouseStart = (e: PointerEvent) => {
        setIsPressed(true);
        dispatch(setDraggable(true));

        const clientCoords = ref.current.getBoundingClientRect();

        startPointerPosition.current = {
            left: clientCoords.left - e.clientX,
            top: clientCoords.top - e.clientY,
            absoluteLeft: clientCoords.left,
            absoluteTop: clientCoords.top,
        };

        originWidth.current = {
            height: ref.current.offsetHeight,
            width: ref.current.offsetWidth,
        };

        ref.current.style.width = originWidth.current.width + "px";
        ref.current.style.height = originWidth.current.height + "px";
    };

    const mouseMove = (e: MouseEvent) => {
        if (!startPointerPosition.current) return;

        const { left, top } = startPointerPosition.current;

        ref.current.style.top = e.clientY + top + "px";
        ref.current.style.left = e.clientX + left + "px";

        ref.current.style.position = "fixed";
    };

    const mouseEnd = (e: PointerEvent) => {
        setIsPressed(false);
        dispatch(setDraggable(true));

        if (ref.current) {
            ref.current.style.top =
                startPointerPosition?.current?.absoluteTop + "px";
            ref.current.style.left =
                startPointerPosition?.current?.absoluteLeft + "px";
        }

        const elementUnderCard = document.elementFromPoint(
            e.clientX,
            e.clientY
        );

        const columnId = elementUnderCard
            ?.closest("[dropContainerId]")
            ?.getAttribute("dropContainerId");

        ref.current.style.position = "relative";

        if (!columnId) return;
        console.log(columnId);
        onDrop(Number(columnId));
    };

    useEffect(() => {
        if (ref) {
            ref.current?.addEventListener("pointerdown", mouseStart);
        }
    }, [ref]);

    useEffect(() => {
        if (isPressed) {
            window.addEventListener("pointermove", mouseMove);
            window.addEventListener("pointerup", mouseEnd);
        }

        return () => {
            window.removeEventListener("pointermove", mouseMove);
            window.removeEventListener("pointerup", mouseEnd);
        };
    }, [isPressed]);

    return { isPressed };
};
