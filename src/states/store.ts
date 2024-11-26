import { configureStore, Middleware } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import loggedUser from "./slices/loggedUserSlice";
import usersSlices from "./slices/usersSlice";

const persistedState: Middleware = store => next => action => {

    //veamos en la consola que accion entra al middleware
    console.log(action)

    //Todo lo que ocurrio de aqui hacia atras, es ANTES de hacer el cambio de estado.
    next(action);
    //Todo lo que ocurrio de aqui hacia adelante, es DESPUES de hacer el cambio de estado.

    const estado = store.getState()
    const estadoAsJson = JSON.stringify(estado.users)
    localStorage.setItem('__redux__users__', estadoAsJson)
}

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        loggedUser: loggedUser,
        users: usersSlices
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistedState),
});

export type RootType = ReturnType<typeof store.getState>