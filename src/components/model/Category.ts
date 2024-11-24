export interface Category {
    id: string;
    name: string;
    description: string;
}
export interface CategoryResponse {
    hasErrors: boolean;
    content: Category[];
    errors: string;
    status: number;
    timestamp: string;
}
