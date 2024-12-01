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
    JobsList,
    JobEdit,
    ManagerJobApplies,
    CompanyProfile,
    SearchByCV,
    Settings,
    Candidates,
    Admin,
} from '../page';

// Utility function to create recruiter route config
const createRecruiterRoute = (path: string, component: React.ComponentType) => ({
    path,
    component,
    layout: RecruiterLayout,
    roles: ['ROLE_COMPANY', 'ROLE_ADMIN'],
});

// Public routes that don't require authentication
const publicPages = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Registration },
    { path: '/reset-password', component: ResetPassword },
    { path: '/job-details/:jobId', component: JobDetails },
    { path: '/jobs', component: Jobs },
    { path: '/find', component: FindJob },
    { path: '/upload', component: UploadFile },
    { path: '/profile', component: Profile },
    { path: '/my-cv', component: MyCV },
    { path: '/search-by-cv', component: SearchByCV },
];

// Recruiter child routes
const recruiterChildren = [
    { path: 'create-job', component: CreateJob },
    { path: 'job-list', component: JobsList },
    { path: 'edit', component: JobEdit },
    { path: 'manager-applies', component: ManagerJobApplies },
    { path: 'profile', component: CompanyProfile },
    { path: 'settings', component: Settings },
    { path: 'candidates', component: Candidates },
].map((route) => createRecruiterRoute(route.path, route.component));

export const publicRoute = [
    ...publicPages,
    {
        path: '/recruiter',
        component: Home,
        layout: RecruiterLayout,
        roles: ['ROLE_COMPANY', 'ROLE_ADMIN'],
        children: recruiterChildren,
    },
    {
        path: '/admin',
        component: Admin,
        roles: ['ROLE_ADMIN'],
    },
];
