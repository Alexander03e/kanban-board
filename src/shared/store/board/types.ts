export interface ITask {
    id: number;
    columnId: number;
    label: string;
}

export type BoardInitialState = {
    isDragging: boolean;

    tasks: ITask[];

};
