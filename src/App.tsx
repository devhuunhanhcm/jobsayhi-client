import { Outlet, Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/route';
import DefaultLayout from './components/layouts/DefaultLayout';
import { useAppSelector } from './redux/hooks';
import Loading from './components/layouts/Loading';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { getProfile } from './service/UserService';

type ConfigRoute = {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType<{ children: React.ReactNode }>;
    children?: ConfigRoute[];
};
function App() {
    const isLoading = useAppSelector((state) => state.loading.isLoading);
    const isLoged = useAppSelector((state) => state.auth.isLogined) || false;

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (isLoged) {
                try {
                    await getProfile();
                } catch (error) {
                    console.error('Lỗi khi lấy thông tin người dùng:', error);
                }
            }
        };

        fetchUserProfile();
    }, []);
    const renderRoute = (route: ConfigRoute) => {
        const Component = route.component;
        const Layout = route.layout || DefaultLayout;

        const routeElement = (
            <Layout>
                <Component />
            </Layout>
        );
        if (route.children) {
            return (
                <Route key={route.path} path={route.path} element={<Outlet />}>
                    <Route index element={routeElement} />
                    {route.children.map((child) => renderRoute(child))}
                </Route>
            );
        }

        return <Route key={route.path} path={route.path} element={routeElement} />;
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            {isLoading && <Loading />}
            <Routes>
                {publicRoute.map((route) => renderRoute(route))}
                <Route path="*" element={<p> 404 page</p>} />
            </Routes>
        </>
    );
}

export default App;
