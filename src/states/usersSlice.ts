import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserWithId[] = [
    {
        id: "f97e1460-225a-4376-a83f-f1689aa92c67",
        name: "Max Fonseca",
        email: "mfonseca@gmail.com",
        username: "mfonseca",
    },
    {
        id: "00ee23ff-15c5-4682-bd75-2bf26e6e42d5",
        name: "Romina Ponce",
        email: "romipo@gmail.com",
        username: "laromi",
    },
    {
        id: "eb8fdec8-f179-403d-a899-9769784c9b5d",
        name: "Ana Gonzalez",
        email: "anigv@gmail.com",
        username: "ani",
    }
]

export interface User {
    name: string;
    username: string;
    email: string;
}

export type userId = string;

export interface UserWithId extends User {
    id: userId;
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            const id = crypto.randomUUID();
            state.push({ id, ...action.payload })
            console.log(current(state))
        },
    }
})

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;