import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, ListGroup, Modal } from 'react-bootstrap';
import axiosInstance from '@/api/AxiosInstance';

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
    const [recommendations, setRecommendations] = useState<JobRecommendation[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

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

        setLoading(true);
        setError(null);

        try {
            const recommendResponse = await axios.post<{
                status: string;
                recommendations: JobRecommendation[];
            }>(
                'http://localhost:5000/api/recommend',
                { file_url: selectedFile.url },
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                },
            );

            setRecommendations(recommendResponse.data.recommendations);
            setShowModal(true);
        } catch (err) {
            setError('Failed to get recommendations');
            console.error(err);
        } finally {
            setLoading(false);
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
                        disabled={!selectedFile || loading}
                        onClick={handleGetRecommendations}
                    >
                        {loading ? 'Processing...' : 'Get Job Recommendations'}
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Gợi ý</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {recommendations.map((job) => (
                        <Card key={job.id} className="mb-3">
                            <Card.Body>
                                <Card.Title>{job.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{job.location}</Card.Subtitle>
                                <Card.Text>{job.description}</Card.Text>
                                <div className="d-flex justify-content-between">
                                    <span>Similarity: {(job.similarity_score * 100).toFixed(2)}%</span>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default SearchByCV;
