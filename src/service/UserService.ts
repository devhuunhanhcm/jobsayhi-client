import axiosInstance from '../api/AxiosInstance';
import { setUserInfo } from '../redux/Slice/UserSlice';
import store from '../redux/store';

export const getProfile = async () => {
    try {
        const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/users/profile`);
        store.dispatch(setUserInfo(response.data.content));
    } catch (error: any) {
        console.log(error);
    }
};
