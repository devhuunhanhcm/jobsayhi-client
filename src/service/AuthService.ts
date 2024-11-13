import axios from 'axios';
import {
    LoginDTO,
    loginFailed,
    loginSuccess,
    RegisterDTO,
    registerFailed,
    registerSuccess,
} from '../redux/Slice/AuthSlice';
import { loading, unLoading } from '../redux/Slice/LoadingSlice';
import toast from 'react-hot-toast';
import store from '../redux/store';

export const login = async (data: LoginDTO) => {
    try {
        store.dispatch(loading());
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, data);
        store.dispatch(unLoading());
        store.dispatch(loginSuccess(response.data.content));

        return true;
    } catch (error: any) {
        store.dispatch(loginFailed(error.response.data.errors));
        store.dispatch(unLoading());
        return false;
    }
};

export const register = async (data: RegisterDTO) => {
    try {
        store.dispatch(loading());
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, data);
        store.dispatch(unLoading());
        store.dispatch(registerSuccess());
        toast.success('Register successfully, Login now!');
        return true;
    } catch (error: any) {
        store.dispatch(unLoading());
        store.dispatch(registerFailed(error.response.data.errors));
        toast.success('Register failed!');
        return false;
    }
};
