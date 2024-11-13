import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfileData {
    userId: string;
    username: string;
    displayName: string;
    email: string;
    avatar: string;
    phone: string;
}
const initialState: UserProfileData = {
    userId: '',
    username: '',
    displayName: '',
    email: '',
    avatar: '',
    phone: '',
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserProfileData>) => {
            state.avatar = action.payload.avatar;
            state.username = action.payload.username;
            state.phone = action.payload.phone;
            state.displayName = action.payload.displayName;
            state.userId = action.payload.userId;
            state.email = action.payload.email;
        },
    },
});
export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
