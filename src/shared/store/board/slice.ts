import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardInitialState } from "./types";
import { mockTasks } from "./mock";

const boardState: BoardInitialState = {
    isDragging: false,

    tasks: mockTasks,
};

export const boardSlice = createSlice({
    name: "board/slice",
    initialState: boardState,
    reducers: {
        setDraggable(state, action: PayloadAction<boolean>) {
            state.isDragging = action.payload;
        },
        changeColumn(
            state,
            action: PayloadAction<{ id: number; columnId: number }>
        ) {
            const { id, columnId } = action.payload;
            const findTask = state.tasks.find((item) => item.id === id);

            if (!findTask) return;

            findTask.columnId = columnId;
        },
    },
});

export const { setDraggable, changeColumn } = boardSlice.actions;

export default boardSlice.reducer;
