import { ImEye, ImFileText2 } from 'react-icons/im';
import React, { useState, useEffect } from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import axiosInstance from '@/api/AxiosInstance';
import { useAppDispatch } from '@/redux/hooks';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import * as XLSX from 'xlsx';
import { CiExport } from 'react-icons/ci';

import Select from 'react-select';
import { customStylesSelect } from '@/page/CreateJob';

interface UserProfileDTO {
    id: string;
    username: string;
    displayName: string;
    email: string;
    avatar: string | null;
    phone: string;
}
const ApplyStatus = [
    { value: 'ACCEPT', label: 'Chấp nhận' },
    { value: 'REJECT', label: 'Từ chối' },
    { value: 'NOT_APPROVED', label: 'Chưa phản hồi' },
];
interface UserFileDTO {
    id: string;
    createAt: string;
    name: string;
    url: string;
}

interface JobApplyDTO {
    message: string;
    userId: string;
    name: string;
    phone: string;
    email: string;
    fileName: string;
    fileUrl: string;
    status: string;
}

interface JobAppliesTableProps {
    jobId: string;
}

const JobAppliesTable: React.FC<JobAppliesTableProps> = ({ jobId }) => {
    const [applies, setApplies] = useState<JobApplyDTO[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchJobApplies = async () => {
            try {
                dispatch(loading());
                const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/apply/all-of-job/${jobId}`);
                const data = response.data.content;
                setApplies(data);
            } catch (err) {
                setApplies([]);
            } finally {
                dispatch(unLoading());
            }
        };

        fetchJobApplies();
    }, [jobId]);

    const handleViewProfile = (userId: string) => {
        console.log(`View profile for user: ${userId}`);
    };

    const handleDownloadResume = (fileUrl: string, fileName: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        link.click();
    };

    const handleExportToExcel = () => {
        const exportData = applies.map((apply) => ({
            Tên: apply.name,
            Email: apply.email,
            'Số điện thoại': apply.phone,
            'Lời nhắn': apply.message,
            'File CV': apply.fileUrl || 'Không có CV',
        }));

        const worksheet = XLSX.utils.json_to_sheet(exportData);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Ứng viên');

        XLSX.writeFile(workbook, `Danh_sach_ung_vien_${new Date().toLocaleDateString()}.xlsx`);
    };
    return (
        <Card className="mt-30">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h4>Danh sách CV nhận được</h4>
                <div className="d-flex align-items-center">
                    <div className="text-muted me-3">Tổng số cv: {applies.length}</div>
                    <Button
                        variant="outline-success"
                        size="sm"
                        onClick={handleExportToExcel}
                        disabled={applies.length === 0}
                    >
                        <CiExport /> Excel
                    </Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>SĐT</th>
                            <th>Lời nhắn</th>
                            <th>File CV</th>
                            <th>Trạng thái</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {applies.map((apply) => {
                            const status = ApplyStatus.find((t) => t.value === apply.status);

                            return (
                                <tr key={apply.userId}>
                                    <td>{apply.name}</td>
                                    <td>{apply.email}</td>
                                    <td>{apply.phone}</td>
                                    <td>{apply.message}</td>
                                    <td>
                                        {apply.fileName ? (
                                            <div className="d-flex align-items-center">
                                                <ImFileText2 className="me-2" size={20} />
                                                {apply.fileName}
                                            </div>
                                        ) : (
                                            'No resume'
                                        )}
                                    </td>

                                    <td>{status?.label}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                className="me-1"
                                                onClick={() => handleViewProfile(apply.userId)}
                                            >
                                                <ImEye size={16} />
                                            </Button>
                                            {apply.fileUrl && (
                                                <Button
                                                    variant="outline-success"
                                                    size="sm"
                                                    onClick={() => handleDownloadResume(apply.fileUrl, apply.fileUrl)}
                                                >
                                                    <IoCloudDownloadOutline size={16} />
                                                </Button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                {applies.length === 0 && <div className="text-center text-muted py-3">Chưa nhận được cv nào!</div>}
            </Card.Body>
        </Card>
    );
};

export default JobAppliesTable;
