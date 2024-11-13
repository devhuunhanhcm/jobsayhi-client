import { Home, Login, Registration, ResetPassword, JobDetails, Jobs } from '../page';

export const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Registration,
    },
    {
        path: '/reset-password',
        component: ResetPassword,
    },
    {
        path: '/job-details/:jobId',
        component: JobDetails,
    },
    {
        path: '/jobs',
        component: Jobs,
    },
    {
        path: '/test',
        component: Home,
        children: [{ path: ':category', component: Home }],
    },
];
