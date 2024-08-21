import {
    MutableRefObject,
    PointerEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { useAppDispatch } from "./redux";
import { setDraggable } from "../store/board/slice";
import { getElementUnder } from "../utils/getElementUnder";
import { DROP_TAG } from "../enums/drag";

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

    const initialColumnId = useRef<string>(null);

    const mouseStart: PointerEventHandler<HTMLElement> = useCallback((e) => {
        const { columnId } = getElementUnder(e, DROP_TAG.DROP_CONTAINER);

        initialColumnId.current = columnId;

        setIsPressed(true);
        console.log("test");
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

        ref.current.style.position = "fixed";

        const { left, top } = startPointerPosition.current;

        ref.current.style.top = e.clientY + top + "px";
        ref.current.style.left = e.clientX + left + "px";
    }, []);

    const mouseMove = useCallback((e: MouseEvent) => {
        if (!ref.current || !startPointerPosition.current) return;

        const { left, top } = startPointerPosition.current;

        ref.current.style.top = e.clientY + top + "px";
        ref.current.style.left = e.clientX + left + "px";
    }, []);

    const mouseEnd = (e: PointerEvent) => {
        setIsPressed(false);
        dispatch(setDraggable(false));

        const { columnId } = getElementUnder(e, DROP_TAG.DROP_CONTAINER);

        if (initialColumnId.current === columnId || !columnId) {
            ref.current.style.position = "initial";
            return;
        }

        onDrop(Number(columnId));
    };

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

    return { isPressed, mouseStart };
};
