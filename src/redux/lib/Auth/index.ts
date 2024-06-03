import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
export interface Auth {
    email: string;
    token: string;
    logged: boolean
}
const initialState: Auth = {
    email: '',
    token: '',
    logged: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        Login: (state, action: PayloadAction<Auth>) => {
            const { email, token } = action.payload;
            state.email = email;
            state.token = token;
            state.logged = true
        },
        Logout: (state) => {
            state.email = '';
            state.token = '';
            state.logged = false
        },
    },
});
export const { Login, Logout } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;