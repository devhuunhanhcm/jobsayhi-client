import axiosInstance from '@/api/AxiosInstance';
import { UserProfileDto } from '@/page/Profile';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import { updateInfo } from '@/redux/Slice/UserSlice';
import store from '@/redux/store';
export interface Candidate {
    id: string;
    fullName: string;
    email: string;
    shortDescription: string;
    phone: string;
    avatarUrl: string;
    yearsOfExperience: number;
    location: string;
    level: string;
}
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

export const getCandidates = async (): Promise<Candidate[] | null> => {
    try {
        store.dispatch(loading());
        const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/users/company/all-seekers`, {
            params: {
                limit: 10,
                page: 1,
                orderBy: 'createAt',
            },
        });
        store.dispatch(unLoading());
        return response.data.content.data;
    } catch (error: any) {
        store.dispatch(unLoading());
        return null;
    }
};
