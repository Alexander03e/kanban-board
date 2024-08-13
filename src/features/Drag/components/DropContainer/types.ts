import { ChildrenProps } from "../DragElement/types";

export type DropContainerChildrenProps = Omit<ChildrenProps, "isPressed"> & {
    dropcontainerid: string | number;
};
