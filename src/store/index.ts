import { configureStore } from "@reduxjs/toolkit";
import { markdownReducer } from "./reducer/markdownReducer";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: markdownReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk),
})
export type RootState = ReturnType<typeof markdownReducer>