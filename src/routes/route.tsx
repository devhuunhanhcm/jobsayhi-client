import {
    Home,
    Login,
    Registration,
    ResetPassword,
    JobDetails,
    Jobs,
    UploadFile,
    Profile,
    MyCV,
    FindJob,
} from '../page';

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
        path: '/find',
        component: FindJob,
    },
    {
        path: '/upload',
        component: UploadFile,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/my-cv',
        component: MyCV,
    },
    {
        path: '/test',
        component: Home,
        children: [{ path: ':category', component: Home }],
    },
];
