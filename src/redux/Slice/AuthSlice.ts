import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export const enum AccountType {
    USER = 'USER',
    COMPANY = 'COMPANY',
}
export interface LoginDTO {
    username: string;
    password: string;
}
export interface RegisterDTO extends LoginDTO {
    email: string;
    rePassword: string;
    accountType?: string | AccountType.USER;
}
export interface Token {
    token: string;
    valid: boolean;
}

interface AuthState {
    isLogined: boolean;
    token: string | null;
    errors: string | null;
}
const initialState: AuthState = {
    isLogined: false,
    token: null,
    errors: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<Token>) => {
            state.isLogined = true;
            state.token = action.payload.token;
            state.errors = null;
        },
        loginFailed: (state, action: PayloadAction<string | string[]>) => {
            state.isLogined = false;
            state.token = null;
            state.errors = action.payload.toString();
        },
        registerSuccess: (state) => {
            state.errors = null;
        },
        registerFailed: (state, action: PayloadAction<string | string[]>) => {
            state.errors = action.payload.toString();
        },
        updateToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logoutSuccess: (state) => {
            state.isLogined = false;
            state.errors = null;
            state.token = null;
        },
    },
});

export const { loginSuccess, loginFailed, registerFailed, registerSuccess, updateToken, logoutSuccess } =
    authSlice.actions;
export default authSlice.reducer;
