import axiosInstance from '@/api/AxiosInstance';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import store from '@/redux/store';
import toast from 'react-hot-toast';
export interface ICompanyProfileDTO {
    name: string;
    avatarUrl: string;
    address: string;
    email: string;
    noEmployees: string;
    introduction: string;
    establishDate: string;
    phone: string;
    isVerified: boolean;
}

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
export const getCompanyDetails = async (companyId: string) => {
    try {
        store.dispatch(loading());
        const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/company/details/${companyId}`);
        store.dispatch(unLoading());
        return response.data.content;
    } catch (error: any) {
        store.dispatch(unLoading());
        return null;
    }
};
export const updateCompanyProfile = async (userId: string, dto: ICompanyProfileDTO) => {
    try {
        store.dispatch(loading());
        const response = await axiosInstance.put(`${import.meta.env.VITE_API_URL}/company/update/${userId}`, dto);
        store.dispatch(unLoading());
        toast.success('Cập nhật tài khoản tuyển dụng thành công');
        return response.data.content;
    } catch (error: any) {
        store.dispatch(unLoading());
        toast.success('Cập nhật tài khoản tuyển dụng thất bại, vui lòng thử lại.');
        return null;
    }
};
