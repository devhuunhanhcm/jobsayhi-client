import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
    isLoading: boolean;
}
const initialState: LoadingState = {
    isLoading: false,
};
const loadingSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        unLoading: (state) => {
            state.isLoading = false;
        },
    },
});

export const { loading, unLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
