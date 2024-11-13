import { HttpStatusCode } from 'axios';

export interface ApiResponse<T = any> {
    hasErrors: boolean;
    content: T;
    errors: string;
    status: HttpStatusCode;
    timestamp: string;
}
