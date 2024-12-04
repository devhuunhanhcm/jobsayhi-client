import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import axiosInstance from '@/api/AxiosInstance';
import { useAppDispatch } from '@/redux/hooks';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import toast from 'react-hot-toast';
import { AiOutlineFileSearch } from 'react-icons/ai';
import LoadingSearch from '@/components/layouts/LoadingSearch';
import { LuHardDriveUpload } from 'react-icons/lu';
import { setJobsAction } from '@/redux/Slice/RecommendationsSlice';
import { useNavigate } from 'react-router-dom';

interface CVFile {
    id: string;
    createAt: string;
    name: string;
    url: string;
}

interface JobRecommendation {
    id: string;
    title: string;
    description: string;
    location: string;
    similarity_score: number;
}
const extractFileId = (url: string): string | null => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
};
const SearchByCV: React.FC = () => {
    const [cvFiles, setCvFiles] = useState<CVFile[]>([]);
    const [selectedExistingFile, setSelectedExistingFile] = useState<CVFile | null>(null);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetchCVFiles();
    }, []);

    const fetchCVFiles = async () => {
        try {
            const response = await axiosInstance.get<{
                hasErrors: boolean;
                content: CVFile[];
            }>('http://localhost:8080/api/v1/files');
            setCvFiles(response.data.content || []);
        } catch (err) {
            console.error('Error fetching CV files:', err);
            setError('Failed to load existing CV files');
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type !== 'application/pdf') {
                toast.error('Please upload a PDF file');
                return;
            }
            setUploadedFile(file);
            setSelectedExistingFile(null); // Clear existing file selection
        }
    };

    const handleExistingFileSelect = (file: CVFile) => {
        setSelectedExistingFile(file);
        setUploadedFile(null); // Clear uploaded file
    };

    const getRecommendations = async () => {
        if (!uploadedFile && !selectedExistingFile) {
            toast.error('Vui lòng chọn file CV trước!');
            return;
        }

        setError(null);
        setIsLoading(true);
        try {
            let response;

            if (uploadedFile) {
                // Handle newly uploaded file
                const formData = new FormData();
                formData.append('cv', uploadedFile);
                response = await axios.post(`${import.meta.env.VITE_API_AI_URL}/recommend/file`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else if (selectedExistingFile) {
                response = await axios.post(
                    `${import.meta.env.VITE_API_AI_URL}/recommend/drive-url-file`,
                    { file_url: selectedExistingFile.url },
                    {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    },
                );
            }

            if (response?.data.status === 'success') {
                const data = response.data;
                const jobPaging = {
                    data: data.data,
                    total: data.totalItems,
                    page: data.currentPage,
                    limit: 5,
                };
                console.log(jobPaging);

                dispatch(setJobsAction(jobPaging));
                navigate('/search-by-cv/result', {
                    state: {
                        file: uploadedFile,
                        existingFileUrl: selectedExistingFile?.url,
                    },
                });
            }
        } catch (err) {
            console.error('Error getting recommendations:', err);
            setError('Failed to get job recommendations');
            toast.error('Xử lý gợi ý thất bại. Hãy thử lại sau.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading ? <LoadingSearch /> : ''}

            <Container className="mt-4">
                <div className="d-flex flex-column align-items-center flex-shrink-0">
                    <h5 className="mb-20">Chọn file CV để gợi ý công việc</h5>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div>
                        {cvFiles.map((file) => (
                            <div
                                className={`cv-file ${selectedExistingFile?.id === file.id ? 'active' : ''}`}
                                key={file.id}
                                onClick={() => handleExistingFileSelect(file)}
                            >
                                <AiOutlineFileSearch size={22} className="mr-10" />
                                {file.name}
                            </div>
                        ))}
                    </div>
                    <div className="upload_card">
                        <div className="upload_drop_box">
                            <header>
                                <h4>
                                    <LuHardDriveUpload
                                        size={20}
                                        className="mr-10"
                                        style={{ transform: 'translateY(-5px)' }}
                                    />
                                    Tải lên cv mới
                                </h4>
                            </header>
                            <p>Tệp hỗ trợ: PDF</p>
                            {uploadedFile && <p className="j-primary-color">Đã chọn: {uploadedFile.name}</p>}
                            <input
                                type="file"
                                accept=".pdf"
                                id="fileID"
                                style={{ display: 'none' }}
                                onChange={handleFileUpload}
                                ref={fileInputRef}
                            />
                            <button className="btn" onClick={() => fileInputRef.current?.click()}>
                                Chọn file
                            </button>
                        </div>
                    </div>
                    <Button
                        variant="primary"
                        className="mt-3"
                        disabled={isLoading || (!selectedExistingFile && !uploadedFile)}
                        onClick={getRecommendations}
                    >
                        {isLoading ? (
                            'Đang xử lý...'
                        ) : (
                            <>
                                <MdOutlineTipsAndUpdates size={20} /> Nhận gợi ý ngay
                            </>
                        )}
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default SearchByCV;
