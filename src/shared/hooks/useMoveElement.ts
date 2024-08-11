import { MutableRefObject, useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

/**
 * Хук для перетаскивания элементов и отслеживания его координат.
 */
export const useMoveElement = <T extends HTMLElement>(
    ref: MutableRefObject<T>
) => {
    const [isPressed, setIsPressed] = useState(false);
    const [position, setPosition] = useState<Point>({ x: 0, y: 0 });

    const startPointerPosition = useRef<{
        top: number;
        left: number;
        absoluteLeft: number;
        absoluteTop: number;
    }>();
    const originWidth = useRef<{ width: number; height: number }>();

    const mouseStart = (e: PointerEvent) => {
        setIsPressed(true);

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

        // setPosition((prev) => ({
        //     x: e.movementX + prev.x,
        //     y: e.movementY + prev.y,
        // }));

        ref.current.style.top =
            e.clientY + startPointerPosition.current.top + "px";
        ref.current.style.left =
            e.clientX + startPointerPosition.current.left + "px";

        ref.current.style.position = "fixed";

        // const elementUnderCard = document.elementFromPoint(e.clientX + )
        // console.log(e.target)
    };

    const mouseEnd = (e: PointerEvent) => {
        setIsPressed(false);

        // if (ref.current) {
        //     ref.current.style.top =
        //         startPointerPosition?.current?.absoluteTop + "px";
        //     ref.current.style.left =
        //         startPointerPosition?.current?.absoluteLeft + "px";
        // }

        // console.log(e);
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

    return { position, isPressed };
};
