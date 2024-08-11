import { combineReducers } from "@reduxjs/toolkit";
import { sliceReducers } from "./slices";
import { apiReducers } from "./api";

const rootReducer = combineReducers({
    ...sliceReducers,
    ...apiReducers
})

export { rootReducer }