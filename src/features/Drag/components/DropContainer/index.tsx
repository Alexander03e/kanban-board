import { FC, ReactElement, useRef } from "react";
import { DropContainerChildrenProps } from "./types";

interface IProps {
    children: (props: DropContainerChildrenProps) => ReactElement;
    dropId: string | number;
}

export const DropContainer: FC<IProps> = ({ children, dropId }) => {
    const containerRef = useRef<HTMLElement>(null);

    return children({
        ref: containerRef,
        dropcontainerid: dropId,
    });
};
