import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { jwtDecode } from 'jwt-decode';
import store from '../redux/store';
import { logoutSuccess, updateToken } from '../redux/Slice/AuthSlice';
interface JwtPayload {
    exp: number;
}

// Tạo Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Hàm kiểm tra token hết hạn
const isTokenExpired = (token: string): boolean => {
    try {
        const decoded: JwtPayload = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp < currentTime;
    } catch (error) {
        return true;
    }
};

// Hàm làm mới token
const refreshToken = async (): Promise<string | null> => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/get-new-token`, {
            withCredentials: true,
        });
        const newToken = response.data.content;
        console.log('new token: ', newToken);

        // Cập nhật token mới vào Redux store
        store.dispatch(updateToken(newToken));

        return newToken;
    } catch (error) {
        console.error('Error refreshing token:', error);
        return null;
    }
};

axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        let token = store.getState().auth.token;

        if (token && isTokenExpired(token)) {
            console.log(isTokenExpired(token));

            token = await refreshToken();

            if (token === null) {
                store.dispatch(logoutSuccess());
                console.log('refresh token move to /login');
                window.location.href = '/login';
            }
        }

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            store.dispatch(logoutSuccess());
            window.location.href = '/login';
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;
