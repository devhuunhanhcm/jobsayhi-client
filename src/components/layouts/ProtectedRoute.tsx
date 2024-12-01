// components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useAppSelector } from '@/redux/hooks';

interface JWTPayload {
    authorities: string[];
    sub: string;
    tokenType: string;
}

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles: string[];
}

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const token = useAppSelector((state) => state.auth.token);
    const isLoged = useAppSelector((state) => state.auth.isLogined);

    if (!isLoged || !token) {
        return <Navigate to="/login" replace />;
    }

    try {
        const decoded = jwtDecode<JWTPayload>(token);
        const userRoles = decoded.authorities;

        const hasRequiredRole = allowedRoles.some((role) => userRoles.includes(role));

        if (!hasRequiredRole) {
            return <Navigate to="/" replace />;
        }

        return <>{children}</>;
    } catch (error) {
        return <Navigate to="/login" replace />;
    }
};
