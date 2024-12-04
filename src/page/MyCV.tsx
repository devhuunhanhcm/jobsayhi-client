import React, { useState, useEffect } from 'react';
import UploadFileService from '@/service/UploadFileService';
import { GoTrash } from 'react-icons/go';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@/redux/hooks';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';

interface Props {}
export interface FileInfo {
    id: string;
    createAt: string;
    name: string;
    url: string;
}
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
};

const MyCV: React.FC<Props> = ({}) => {
    const dispatch = useAppDispatch();
    const [fileInfos, setFileInfos] = useState<FileInfo[]>([]);

    useEffect(() => {
        loadFiles();
    }, []);

    const loadFiles = async () => {
        try {
            const response = await UploadFileService.getFiles();
            if (!response.data.hasErrors) {
                setFileInfos(response.data.content);
            }
        } catch (error) {
            console.error('Error loading files:', error);
        }
    };
    const handleDeleteFile = async (id: string) => {
        console.log(id);
        dispatch(loading());

        try {
            const response = await UploadFileService.deleteFile(id);

            dispatch(unLoading());
            if (!response.data.hasErrors) {
                console.log(response.data);
                toast.success(response.data.content);
                loadFiles();
            }
        } catch (error) {
            dispatch(unLoading());
            toast.error('Error delete files: ' + error);
        }
    };
    return (
        <>
            <div className="container">
                {fileInfos.length !== 0 ? (
                    <>
                        <strong className="cv_list_header mb-12 d-block">Danh sách cv đã tải lên</strong>
                        <div className="cv_list">
                            {fileInfos.map((file) => (
                                <div key={file.id} className="cv_list_item">
                                    <div className="cv_list_item_info">
                                        <p className="name">{file.name}</p>
                                        <p className="last_modified">{formatDate(file.createAt)}</p>
                                        <div className="action">
                                            <div className="left">
                                                <a href={file.url}>Xem</a>
                                                <a href={file.url} className="download">
                                                    Tải xuống
                                                </a>
                                            </div>
                                            <div className="delete" onClick={() => handleDeleteFile(file.id)}>
                                                <GoTrash />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>
                        Bạn chưa có cv nào, <a href="/upload">Tải lên ngay</a>
                    </p>
                )}
            </div>
        </>
    );
};

export default MyCV;
