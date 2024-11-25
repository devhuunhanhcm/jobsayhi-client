import RecruiterLayout from '@/components/layouts/RecruiterLayout';
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
    CreateJob,
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
        path: '/recruiter',
        component: Home,
        layout: RecruiterLayout,
        children: [{ path: 'create-job', component: CreateJob, layout: RecruiterLayout }],
    },
    {
        path: '/test',
        component: Home,
        children: [{ path: ':category', component: Home }],
    },
];
