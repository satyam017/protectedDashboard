import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer.redux";

const store = configureStore({
    reducer: rootReducer,
});

export default store;