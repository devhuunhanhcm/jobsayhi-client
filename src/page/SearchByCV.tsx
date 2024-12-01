import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, ListGroup, Modal } from 'react-bootstrap';
import axiosInstance from '@/api/AxiosInstance';
import { JobReview } from '@/components/model/Job';
import JobCardGrid from '@/components/layouts/JobCardGrid';
import { useAppDispatch } from '@/redux/hooks';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';

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
    const [selectedFile, setSelectedFile] = useState<CVFile | null>(null);
    const [recommendations, setRecommendations] = useState<JobReview[]>([]);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchCVFiles = async () => {
            try {
                const response = await axiosInstance.get<{
                    hasErrors: boolean;
                    content: CVFile[];
                }>('http://localhost:8080/api/v1/files');
                setCvFiles(response.data.content || []);
            } catch (err) {
                console.error('Error fetching CV files', err);
                setError('Failed to load CV files');
            }
        };
        fetchCVFiles();
    }, []);

    const handleFileSelect = (file: CVFile) => {
        setSelectedFile(file);
    };

    const handleGetRecommendations = async () => {
        if (!selectedFile) return;
        dispatch(loading());
        setError(null);

        try {
            const recommendResponse = await axios.post<{
                status: string;
                recommendations: JobReview[];
            }>(
                'http://localhost:5000/api/recommend/drive-url-file',
                { file_url: selectedFile.url },
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                },
            );

            setRecommendations(recommendResponse.data.recommendations);
        } catch (err) {
            setError('Failed to get recommendations');
            console.error(err);
        } finally {
            dispatch(unLoading());
        }
    };

    return (
        <Container className="mt-4">
            <Card>
                <Card.Header>Chọn file CV để gợi ý công việc</Card.Header>
                <Card.Body>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <ListGroup>
                        {cvFiles.map((file) => (
                            <ListGroup.Item
                                key={file.id}
                                action
                                active={selectedFile?.id === file.id}
                                onClick={() => handleFileSelect(file)}
                            >
                                {file.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button
                        variant="primary"
                        className="mt-3"
                        disabled={!selectedFile}
                        onClick={handleGetRecommendations}
                    >
                        <MdOutlineTipsAndUpdates size={20} /> Nhận gợi ý ngay
                    </Button>
                </Card.Body>
            </Card>
            <div className="mt-20">
                {recommendations.map((job) => (
                    <JobCardGrid job={job} />
                ))}
            </div>
        </Container>
    );
};

export default SearchByCV;
