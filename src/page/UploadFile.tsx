import React, { useState, useEffect, useRef } from 'react';
import { Alert, Button, Card, Container, ProgressBar, Table } from 'react-bootstrap';
import axios, { AxiosProgressEvent } from 'axios';
import UploadFileService from '@/service/UploadFileService';
import axiosInstance from '@/api/AxiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface FileInfo {
    id: string;
    createAt: string;
    name: string;
    url: string;
}

interface UploadResponse {
    hasErrors: boolean;
    content: FileInfo;
    errors: string;
    status: number;
    timestamp: string;
}

interface FilesResponse {
    hasErrors: boolean;
    content: FileInfo[];
    errors: string;
    status: number;
    timestamp: string;
}

const UploadFile: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [currentFile, setCurrentFile] = useState<File | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(event.target.files);

            setProgress(0);
        }
    };
    const handleChooseFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const upload = async () => {
        if (!selectedFiles) {
            toast.error('Please select a file first!');
            return;
        }

        const currentFile = selectedFiles[0];
        setProgress(0);
        setCurrentFile(currentFile);

        try {
            const formData = new FormData();
            formData.append('file', currentFile);

            const response = await axiosInstance.post(`${import.meta.env.VITE_API_URL}/files/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
                    setProgress(percentCompleted);
                },
            });

            const uploadResponse = response.data as UploadResponse;
            if (!uploadResponse.hasErrors) {
                toast.success('File uploaded successfully!');
                navigate('/my-cv');
            } else {
                toast.error(uploadResponse.errors || 'Failed to upload file.');
            }
        } catch (error) {
            setProgress(0);
            toast.error('Could not upload the file.');
        }

        setCurrentFile(null);
        setSelectedFiles(null);
    };

    return (
        <Container>
            <div className="upload_container">
                <div className="upload_card">
                    <h3>Tải lên cv của bạn</h3>
                    <div className="upload_drop_box">
                        <header>
                            <h4>Chọn cv của bạn</h4>
                        </header>
                        <p>Tệp hỗ trợ: PDF</p>
                        {selectedFiles && selectedFiles[0].name ? <span>{selectedFiles[0].name}</span> : ''}
                        <input
                            type="file"
                            accept=".pdf"
                            id="fileID"
                            style={{ display: 'none' }}
                            onChange={selectFile}
                            ref={fileInputRef}
                        />

                        {currentFile && (
                            <ProgressBar
                                animated
                                now={progress}
                                label={`${progress}%`}
                                className="mb-3"
                                style={{ width: '100%' }}
                                variant={progress === 100 ? 'success' : 'primary'}
                            />
                        )}
                        <button className="btn" onClick={handleChooseFile}>
                            Chọn file
                        </button>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-default mb-3 upload_button" disabled={!selectedFiles} onClick={upload}>
                    Tải lên
                </button>
            </div>
        </Container>
    );
};

export default UploadFile;
