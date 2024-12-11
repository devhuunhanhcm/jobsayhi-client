import { Company } from './Company';

export interface Job {
    company: Company;
    id: string;
    createAt: string;
    lastModifiedAt: string;
    title: string;
    salary: string;
    location: string;
    experience: string;
    position: string;
    status: string;
    description: string;
    requirements: string;
    benefits: string;
    workingTime: string;
    workingLocation: string;
    deadline: string;
}

export interface CompanyReview {
    name: string;
    avatarUrl: string;
    address: string;
    email: string;
    noEmployees: string;
    introduction: string;
    establishDate: string;
}
export interface JobReview {
    id: string;
    company: CompanyReview;
    title: string;
    salary: string;
    location: string;
    experience: string;
    description: string;
    requirements: string;
    benefits: string;
    createAt: string;
    similarityScore?: number;
}

export const POSITIONS = [
    { value: 'FRESHER', label: 'Fresher' },
    { value: 'JUNIOR', label: 'Junior' },
    { value: 'MIDDLE', label: 'Middle' },
    { value: 'SENIOR', label: 'Senior' },
    { value: 'LEAD', label: 'Lead' },
    { value: 'EXPERT', label: 'Expert' },
    { value: 'INTERN', label: 'Intern' },
    { value: 'MANAGER', label: 'Manager' },
    { value: 'ARCHITECT', label: 'Architect' },
    { value: 'DEVELOPER', label: 'Developer' },
    { value: 'ENGINEER', label: 'Engineer' },
    { value: 'TESTER', label: 'Tester' },
    { value: 'ANALYST', label: 'Analyst' },
    { value: 'CONSULTANT', label: 'Consultant' },
    { value: 'SPECIALIST', label: 'Specialist' },
    { value: 'COORDINATOR', label: 'Coordinator' },
    { value: 'ADMINISTRATOR', label: 'Administrator' },
    { value: 'TECHNICIAN', label: 'Technician' },
    { value: 'DIRECTOR', label: 'Director' },
    { value: 'CHIEF', label: 'Chief' },
    { value: 'OFFICER', label: 'Officer' },
    { value: 'PRODUCT_OWNER', label: 'Product Owner' },
    { value: 'SCRUM_MASTER', label: 'Scrum Master' },
    { value: 'SUPPORT', label: 'Support' },
    { value: 'TRAINER', label: 'Trainer' },
    { value: 'ADVISOR', label: 'Advisor' },
    { value: 'FULLSTACK', label: 'Fullstack' },
    { value: 'FRONTEND', label: 'Frontend' },
    { value: 'BACKEND', label: 'Backend' },
    { value: 'QA', label: 'QA' },
    { value: 'DEVOPS', label: 'DevOps' },
    { value: 'DATA_SCIENTIST', label: 'Data Scientist' },
    { value: 'MACHINE_LEARNING_ENGINEER', label: 'Machine Learning Engineer' },
    { value: 'AI_ENGINEER', label: 'AI Engineer' },
];
