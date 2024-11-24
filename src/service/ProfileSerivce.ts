import axiosInstance from '@/api/AxiosInstance';
import { UserProfileDto } from '@/page/Profile';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import { updateInfo } from '@/redux/Slice/UserSlice';
import store from '@/redux/store';

export const updateProfile = async (data: UserProfileDto) => {
    try {
        store.dispatch(loading());
        const response = await axiosInstance.put(`${import.meta.env.VITE_API_URL}/users/update`, data, {
            withCredentials: true,
        });
        store.dispatch(unLoading());
        store.dispatch(updateInfo(response.data.content));
    } catch (error: any) {
        store.dispatch(unLoading());
    }
};
