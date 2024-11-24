import axiosInstance from '@/api/AxiosInstance';

const upload = (file: File, onUploadProgress: any): Promise<any> => {
    let formData = new FormData();

    formData.append('file', file);

    return axiosInstance.post(`${import.meta.env.VITE_API_URL}/files/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        onUploadProgress,
    });
};
const deleteFile = (id: string): Promise<any> => {
    return axiosInstance.delete(`${import.meta.env.VITE_API_URL}/files/${id}`);
};
const getFiles = (): Promise<any> => {
    return axiosInstance.get(`${import.meta.env.VITE_API_URL}/files`);
};

const UploadFileService = {
    upload,
    getFiles,
    deleteFile,
};

export default UploadFileService;
