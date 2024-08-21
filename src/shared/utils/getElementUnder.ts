export const getElementUnder = (e: PointerEvent, columnTag: string) => {
    const element = document.elementFromPoint(e.clientX, e.clientY);

    const columnId = element
        ?.closest(`[${columnTag}]`)
        ?.getAttribute(columnTag);

    return { columnId, element };
};
