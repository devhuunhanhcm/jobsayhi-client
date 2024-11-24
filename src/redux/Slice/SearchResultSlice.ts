import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from '../store';
import { logoutInfo } from './UserSlice';
import { JobReview } from '@/components/model/Job';

interface iSearchResult {
    results: JobReview[];
}
const initialState: iSearchResult = {
    results: [],
};

const searchResult = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        newResult: (state, action: PayloadAction<JobReview[]>) => {
            state.results = action.payload;
        },
    },
});

export const { newResult } = searchResult.actions;
export default searchResult.reducer;
