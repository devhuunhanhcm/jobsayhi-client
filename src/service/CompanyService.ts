import axiosInstance from '@/api/AxiosInstance';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import store from '@/redux/store';

export const getCompanyProfile = async (userId: string) => {
    try {
        store.dispatch(loading());
        const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/company/find/${userId}`);
        store.dispatch(unLoading());
        return response.data.content;
    } catch (error: any) {
        store.dispatch(unLoading());
        return null;
    }
};
