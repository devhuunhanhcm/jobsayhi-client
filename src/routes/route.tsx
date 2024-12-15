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
    Blog,
    AdminJobs,
    AdminUsers,
    AdminRecruiters,
    AdminCompany,
    SearchByCVResult,
    AuthCallback,
    CompanyDetails,
} from '../page';
import AdminLayout from '@/components/layouts/AdminLayout';
import Company from '@/page/Company';

// Utility function to create recruiter route config
const createRecruiterRoute = (path: string, component: React.ComponentType) => ({
    path,
    component,
    layout: RecruiterLayout,
    roles: ['ROLE_COMPANY', 'ROLE_ADMIN'],
});
const createAdminRoute = (path: string, component: React.ComponentType) => ({
    path,
    component,
    layout: AdminLayout,
    roles: ['ROLE_ADMIN'],
});

// Public routes that don't require authentication
const publicPages = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/auth/google/callback', component: AuthCallback },
    { path: '/register', component: Registration },
    { path: '/company', component: Company },
    { path: '/company-details/:companyId', component: CompanyDetails },
    { path: '/reset-password', component: ResetPassword },
    { path: '/job-details/:jobId', component: JobDetails },
    { path: '/jobs', component: Jobs },
    { path: '/blog', component: Blog },
    { path: '/find', component: FindJob },
    { path: '/candidates', component: Candidates },
    { path: '/reset-password', component: ResetPassword },
    { path: '/upload', component: UploadFile, roles: ['ROLE_USER', 'ROLE_ADMIN'] },
    { path: '/profile', component: Profile },
    { path: '/my-cv', component: MyCV, roles: ['ROLE_USER', 'ROLE_ADMIN'] },
    { path: '/search-by-cv', component: SearchByCV, roles: ['ROLE_USER', 'ROLE_COMPANY', 'ROLE_ADMIN'] },
    { path: '/search-by-cv/result', component: SearchByCVResult, roles: ['ROLE_USER', 'ROLE_ADMIN'] },
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

// admin child routes
const adminChildren = [
    { path: 'jobs', component: AdminJobs },
    { path: 'recruiters', component: AdminRecruiters },
    { path: 'company', component: AdminCompany },
    { path: 'users', component: AdminUsers },
].map((route) => createAdminRoute(route.path, route.component));

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
        layout: AdminLayout,
        roles: ['ROLE_ADMIN'],
        children: adminChildren,
    },
];
