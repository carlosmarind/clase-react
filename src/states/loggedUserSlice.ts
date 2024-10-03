import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: string,
    region: string,
    email: string,
}

const initialState: UserState = {
    user: '',
    region: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
        save: (state: UserState, action: PayloadAction<UserState>) => {
            console.log("llamando al reducer save");
            const { user, region, email } = action.payload;
            state.user = user;
            state.region = region;
            state.email = email;
            return state;
        },
        del: (state: UserState) => {
            state = { ...initialState }
            return state;
        },
        updateMail: (state: UserState, action: PayloadAction<string>) => {
            state.email = action.payload;
            return state;
        }
    }
})

export const { save, del } = userSlice.actions;
export default userSlice.reducer;