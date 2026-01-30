import { createSlice, type PayloadAction } from "@reduxjs/toolkit"; 
import Cookies from 'js-cookie';
import type { AuthType } from "../@types";

interface InitialStateType {
    user: AuthType | null;
}

const userCookie = Cookies.get("user"); 
const initialState: InitialStateType = {
    user: userCookie ? JSON.parse(userCookie) : null,
};

export const userSlice = createSlice({
    name: "user-slice",
    initialState,
    reducers: {
        getUser(state, action: PayloadAction<AuthType>) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
            Cookies.remove("user");
            Cookies.remove("token");
        },
    },
});

export const { getUser, logout } = userSlice.actions;
export default userSlice.reducer;