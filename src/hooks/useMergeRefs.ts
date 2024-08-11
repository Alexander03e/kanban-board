import { MutableRefObject, useCallback } from "react"

/**
 * Хук для объединения ссылок.
 */
export const useMergeRefs = <T extends HTMLElement>(ref: MutableRefObject<T | null> | null, parentRef: MutableRefObject<unknown> | ((el: T | null) => void)) => {
    const cbRef = useCallback((element: T | null) => {
        if (ref) {

            if (!element) return
            
            ref.current = element
            
            if (!parentRef) return
            
            if (typeof parentRef === 'function') {
                parentRef(element)
            } else {
                parentRef.current = element
            }
        }

    }, [ref, parentRef])

    return cbRef
}