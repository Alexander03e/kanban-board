import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const taskState = {
    isDragging: false,
};

export const taskSlice = createSlice({
    name: "task/slice",
    initialState: taskState,
    reducers: {
        setDraggable(state, action: PayloadAction<boolean>) {
            state.isDragging = action.payload;
        },
    },
});

export const { setDraggable } = taskSlice.actions;

export default taskSlice.reducer;
