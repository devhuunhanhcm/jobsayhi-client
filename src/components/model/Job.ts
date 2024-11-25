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
}
