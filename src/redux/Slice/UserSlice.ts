import { UserProfileDto } from './../../page/Profile';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfileData {
    id: string;
    username: string;
    displayName: string;
    email: string;
    avatar: string;
    phone: string;
}
const initialState: UserProfileData = {
    id: '',
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
            state.id = action.payload.id;
            state.email = action.payload.email;
        },
        updateInfo: (state, action: PayloadAction<UserProfileDto>) => {
            state.phone = action.payload.phone;
            state.displayName = action.payload.displayName;
        },
        logoutInfo: (state) => {
            state.avatar = '';
            state.username = '';
            state.phone = '';
            state.displayName = '';
            state.id = '';
            state.email = '';
        },
    },
});
export const { setUserInfo, updateInfo, logoutInfo } = userSlice.actions;
export default userSlice.reducer;
