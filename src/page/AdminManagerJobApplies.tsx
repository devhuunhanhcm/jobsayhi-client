import JobAppliesTable from '@/components/layouts/JobAppliesTable';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { JobDto } from './JobList';
import { getJobDetails } from '@/service/JobService';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Badge, Dropdown } from 'react-bootstrap';
import { Filter } from 'react-bootstrap-icons';

type Props = {};
type JobStatus = 'CLOSED' | 'OPEN' | 'HIDE' | 'PENDING_APPROVAL' | 'REJECT';

const AdminManagerJobApplies: React.FC<Props> = () => {
    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);
    const [job, setJob] = useState<JobDto | null>(null);
    const [statusFilter, setStatusFilter] = useState<JobStatus | null>(null);

    const jobId = queryParams.get('id') || '';
    const getJob = async () => {
        const res = await getJobDetails(jobId);
        console.log(res);
        setJob(res);
    };

    const updateJobStatus = async (status: JobStatus) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/job/update-status/${status}/${jobId}`);
            if (res.data.hasErrors) {
                toast.error('Error updating job status');
            } else {
                toast.success('Job status updated');
            }
        } catch (error) {
            toast.error('Error updating job status');
        }
    };

    useEffect(() => {
        getJob();
    }, [jobId]);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'OPEN':
                return <Badge bg="success">Mở</Badge>;
            case 'CLOSED':
                return <Badge bg="danger">Đóng</Badge>;
            case 'HIDE':
                return <Badge bg="dark">Ẩn</Badge>;
            case 'PENDING_APPROVAL':
                return <Badge bg="warning">Chờ duyệt</Badge>;
            case 'REJECT':
                return <Badge bg="secondary">Từ chối</Badge>;
            default:
                return <Badge bg="secondary">{status}</Badge>;
        }
    };

    return (
        job &&
        jobId.length > 0 && (
            <div>
                <div>
                    <h5>{job.title}</h5>
                    <hr />
                    <p>
                        <strong>Lương:</strong> {job.salary}
                    </p>
                    <p>
                        <strong>Địa điểm:</strong> {job.location}
                    </p>
                    <p>
                        <strong>Kinh nghiệm:</strong> {job.experience}
                    </p>
                    <p>
                        <strong>Vị trí:</strong> {job.position}
                    </p>
                    <p>
                        <strong>Thời gian làm việc:</strong> {job.workingTime}
                    </p>
                    <p>
                        <strong>Thời hạn:</strong> {new Date(job.deadline).toLocaleString()}
                    </p>
                    <hr />
                    <h6>Mô tả công việc</h6>
                    <p>{job.description}</p>
                    <h6>Yêu cầu công việc</h6>
                    <p>{job.requirements}</p>
                    <h6>Quyền lợi</h6>
                    <p>{job.benefits}</p>
                </div>
                <div className="mt-20">
                    <div>Trạng thái hiện tại: {getStatusBadge(job.status)}</div>
                    <Dropdown className="me-2 mt-20">
                        <Dropdown.Toggle variant="outline-secondary" size="sm">
                            <Filter className="me-1" />
                            {statusFilter ? `Trạng thái: ${statusFilter}` : 'Cập nhật trạng thái công việc'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setStatusFilter(null)}>Tất cả</Dropdown.Item>
                            <Dropdown.Item onClick={() => updateJobStatus('OPEN')}>Mở</Dropdown.Item>
                            <Dropdown.Item onClick={() => updateJobStatus('CLOSED')}>Đóng</Dropdown.Item>
                            <Dropdown.Item onClick={() => updateJobStatus('HIDE')}>Ẩn</Dropdown.Item>
                            <Dropdown.Item onClick={() => updateJobStatus('PENDING_APPROVAL')}>Chờ duyệt</Dropdown.Item>
                            <Dropdown.Item onClick={() => updateJobStatus('REJECT')}>Từ chối</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <JobAppliesTable jobId={jobId} />
            </div>
        )
    );
};

export default AdminManagerJobApplies;
