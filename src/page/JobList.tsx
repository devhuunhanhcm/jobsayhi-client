import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Badge, Dropdown, Card, Modal } from 'react-bootstrap';
import { Eye, Pencil, Trash, Filter, SortNumericDown, SortNumericUp } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import { IoReload } from 'react-icons/io5';
import toast from 'react-hot-toast';

export interface JobDto {
    id: string;
    categoryId?: string | null;
    company?: any | null;
    createAt: string;
    lastModifiedAt: string;
    title: string;
    salary: string;
    location: string;
    experience: string;
    position: string;
    status: 'OPEN' | 'CLOSED' | 'IN_PROGRESS';
    description: string;
    requirements: string;
    benefits: string;
    workingTime: string;
    workingLocation: string;
    deadline: string;
}

interface ApiResponse {
    hasErrors: boolean;
    content: JobDto[];
    errors: string;
    status: number;
    timestamp: string;
}

const JobList: React.FC = () => {
    const [jobs, setJobs] = useState<JobDto[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<JobDto[]>([]);
    const [selectedJob, setSelectedJob] = useState<JobDto | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const userId = useAppSelector((state) => state.user.id);
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

    const dispatch = useAppDispatch();

    const [statusFilter, setStatusFilter] = useState<string | null>(null);
    const [sortConfig, setSortConfig] = useState<{ key: keyof JobDto; direction: 'asc' | 'desc' }>({
        key: 'createAt',
        direction: 'desc',
    });

    useEffect(() => {
        if (userId) {
            fetchJobs(userId);
        }
    }, [userId]);

    useEffect(() => {
        filterAndSortJobs();
    }, [jobs, statusFilter, sortConfig]);

    const fetchJobs = async (userId: string) => {
        try {
            dispatch(loading());
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/job/${userId}`);

            setJobs(response.data.content);
            dispatch(unLoading());
        } catch (err) {
            dispatch(unLoading());
        }
    };

    const filterAndSortJobs = () => {
        let result = [...jobs];

        // Filter by status
        if (statusFilter) {
            result = result.filter((job) => job.status === statusFilter);
        }

        // Sort
        result.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setFilteredJobs(result);
    };

    const handleSort = (key: keyof JobDto) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
    };
    const confirmDeleteJob = (job: JobDto) => {
        setSelectedJob(job);
        setShowDeleteConfirmModal(true);
    };

    const handleViewDetails = (job: JobDto) => {
        setSelectedJob(job);
        setShowDetailsModal(true);
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'OPEN':
                return <Badge bg="success">Mở</Badge>;
            case 'CLOSED':
                return <Badge bg="danger">Đóng</Badge>;
            case 'HIDE':
                return <Badge bg="dark">Ẩn</Badge>;
            default:
                return <Badge bg="secondary">{status}</Badge>;
        }
    };

    const handleDeleteJob = async () => {
        if (!selectedJob) return;

        try {
            dispatch(loading());
            const response = await axios.delete<ApiResponse>(
                `${import.meta.env.VITE_API_URL}/job/delete/${selectedJob.id}`,
            );

            if (!response.data.hasErrors) {
                setJobs(jobs.filter((job) => job.id !== selectedJob.id));
                setShowDeleteConfirmModal(false);
                setSelectedJob(null);
                toast.success('Xóa bài viết thành công!');
            } else {
                toast.error('Xóa bài viết thất bại, hãy thử lại sau!');
            }
            dispatch(unLoading());
        } catch (err) {
            toast.error('Xóa bài viết thất bại, hãy thử lại sau!');
            dispatch(unLoading());
        }
    };

    return (
        <Container fluid className="p-4">
            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h4>Danh sách bài viết</h4>
                    <div>
                        <Dropdown className="me-2 d-inline">
                            <Dropdown.Toggle variant="outline-secondary" size="sm">
                                <Filter className="me-1" />
                                {statusFilter ? `Status: ${statusFilter}` : 'Lọc theo status'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setStatusFilter(null)}>Tất cả</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatusFilter('OPEN')}>Đang mở</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatusFilter('CLOSED')}>Đang đóng</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatusFilter('HIDE')}>In Progress</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button variant="outline-primary" size="sm" onClick={() => fetchJobs(userId)}>
                            <IoReload />
                        </Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th onClick={() => handleSort('title')}>
                                    Tiêu đề
                                    {sortConfig.key === 'title' &&
                                        (sortConfig.direction === 'asc' ? <SortNumericUp /> : <SortNumericDown />)}
                                </th>
                                <th onClick={() => handleSort('salary')}>
                                    Lương
                                    {sortConfig.key === 'salary' &&
                                        (sortConfig.direction === 'asc' ? <SortNumericUp /> : <SortNumericDown />)}
                                </th>
                                <th>Địa điểm</th>
                                <th>Vị trí</th>
                                <th>Trạng thái</th>
                                <th>Tạo ngày</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredJobs.map((job) => (
                                <tr key={job.id}>
                                    <td>{job.title}</td>
                                    <td>{job.salary}</td>
                                    <td>{job.location}</td>
                                    <td>{job.position}</td>
                                    <td>{getStatusBadge(job.status)}</td>
                                    <td>{new Date(job.createAt).toLocaleDateString()}</td>
                                    <td>
                                        <Button
                                            variant="outline-info"
                                            size="sm"
                                            className="me-1"
                                            // onClick={() => handleViewDetails(job)}
                                            href={`/recruiter/manager-applies?id=${job.id}`}
                                        >
                                            <Eye />
                                        </Button>
                                        <Button
                                            variant="outline-warning"
                                            href={`/recruiter/edit?id=${job.id}`}
                                            size="sm"
                                            className="me-1"
                                        >
                                            <Pencil />
                                        </Button>
                                        <Button
                                            variant="outline-danger"
                                            onClick={() => confirmDeleteJob(job)}
                                            size="sm"
                                        >
                                            <Trash />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)} size="lg">
                <Modal.Body>
                    {selectedJob && (
                        <div>
                            <h5>{selectedJob.title}</h5>
                            <hr />
                            <p>
                                <strong>Lương:</strong> {selectedJob.salary}
                            </p>
                            <p>
                                <strong>Địa điểm:</strong> {selectedJob.location}
                            </p>
                            <p>
                                <strong>Kinh nghiệm:</strong> {selectedJob.experience}
                            </p>
                            <p>
                                <strong>Vị trí:</strong> {selectedJob.position}
                            </p>
                            <p>
                                <strong>Thời gian làm việc:</strong> {selectedJob.workingTime}
                            </p>
                            <p>
                                <strong>Thời hạn:</strong> {new Date(selectedJob.deadline).toLocaleString()}
                            </p>
                            <hr />
                            <h6>Mô tả công việc</h6>
                            <p>{selectedJob.description}</p>
                            <h6>Yêu cầu công việc</h6>
                            <p>{selectedJob.requirements}</p>
                            <h6>Quyền lợi</h6>
                            <p>{selectedJob.benefits}</p>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
            <Modal show={showDeleteConfirmModal} onHide={() => setShowDeleteConfirmModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Bạn có chắc chắn muốn xóa bài đăng "{selectedJob?.title}" không?. Sau khi xóa bạn
                        <strong> không thể khôi phục </strong>được bài viết này cũng như các cv của người dùng gửi cho
                        bạn.
                    </div>
                    <div className="mt-5">
                        Nếu không chắc hãy <strong> ẩn bài viết</strong>
                        này.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteConfirmModal(false)}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={handleDeleteJob}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default JobList;
