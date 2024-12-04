import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from '../store';
import { logoutInfo } from './UserSlice';
import { JobReview } from '@/components/model/Job';

export interface iJobsPagination {
    data: JobReview[];
    total: number;
    limit: number;
    page: number;
}
const initialState: iJobsPagination = {
    data: [],
    total: 1,
    limit: 5,
    page: 1,
};

const recommendations = createSlice({
    name: 'recommendations',
    initialState,
    reducers: {
        setJobsAction: (state, action: PayloadAction<iJobsPagination>) => {
            state.data = action.payload.data;
            state.total = action.payload.total || 1;
            state.limit = action.payload.limit || 5;
            state.page = action.payload.page || 1;
        },
        setPageChange: (state, action: PayloadAction<{ limit: number; page: number }>) => {
            state.limit = action.payload.limit || 5;
            state.page = action.payload.page || 1;
        },
    },
});

export const { setJobsAction, setPageChange } = recommendations.actions;
export default recommendations.reducer;
