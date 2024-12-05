import { useAppDispatch } from '@/redux/hooks';
import { loginSuccess } from '@/redux/Slice/AuthSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AuthCallback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleCallback = async () => {
            const code = searchParams.get('code');

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/auth/login-social/callback?code=${code}`,
                    { params: { loginType: 'google' }, withCredentials: true },
                );
                const token = response.data.content;
                console.log('login google: token');
                dispatch(loginSuccess(token));
                navigate('/');
            } catch (error) {
                console.error('Auth callback error:', error);
                navigate('/login');
            }
        };

        handleCallback();
    }, [searchParams, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
        </div>
    );
};

export default AuthCallback;
