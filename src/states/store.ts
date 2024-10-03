import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import loggedUser from "./loggedUserSlice";
import usersSlices from "./usersSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        loggedUser: loggedUser,
        users: usersSlices
    }
});

export type RootType = ReturnType<typeof store.getState>