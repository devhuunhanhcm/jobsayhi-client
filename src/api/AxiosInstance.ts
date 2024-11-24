import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { jwtDecode } from 'jwt-decode';
import store from '../redux/store';
import { logoutSuccess, updateToken } from '../redux/Slice/AuthSlice';

interface JwtPayload {
    exp: number;
}

// Track refresh token promise
let refreshTokenPromise: Promise<string | null> | null = null;

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

const isTokenExpired = (token: string): boolean => {
    try {
        const decoded: JwtPayload = jwtDecode(token);
        // Add a buffer of 30 seconds to prevent edge cases
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp < currentTime + 30;
    } catch (error) {
        return true;
    }
};

const refreshToken = async (): Promise<string | null> => {
    try {
        // Use axios directly instead of axiosInstance to avoid interceptor loop
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/get-new-token`, {
            withCredentials: true,
        });
        const newToken = response.data.content;

        if (!newToken) {
            throw new Error('No token received');
        }

        store.dispatch(updateToken(newToken));
        return newToken;
    } catch (error) {
        console.error('Error refreshing token:', error);
        store.dispatch(logoutSuccess());
        return null;
    }
};

axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        let token = store.getState().auth.token;

        console.log('token: ', token);

        if (!token) {
            return config;
        }

        if (isTokenExpired(token)) {
            refreshTokenPromise = refreshToken();

            try {
                token = await refreshTokenPromise;
                if (!token) {
                    window.location.href = '/login';
                    return Promise.reject('Token refresh failed');
                }
            } catch (error) {
                window.location.href = '/login';
                return Promise.reject(error);
            } finally {
                refreshTokenPromise = null;
            }
        }

        if (config.headers) {
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
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            refreshTokenPromise = refreshToken();

            try {
                const newToken = await refreshTokenPromise;
                if (newToken) {
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return axiosInstance(originalRequest);
                }
            } catch (refreshError) {
            } finally {
                refreshTokenPromise = null;
            }
        }

        // If we get here, either the refresh failed or it wasn't a 401
        if (error.response?.status === 401) {
            store.dispatch(logoutSuccess());
            window.location.href = '/login';
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
