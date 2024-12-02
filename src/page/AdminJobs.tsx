import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Badge, Dropdown, Card, Modal, InputGroup, Form } from 'react-bootstrap';
import { Eye, Pencil, Trash, Filter, SortNumericDown, SortNumericUp, Search } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import { IoReload } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { itemRender } from './FindJob';
import Pagination from 'rc-pagination';
import axiosInstance from '@/api/AxiosInstance';

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
type SearchResult = {
    data: JobDto[];
    total: number;
    page: number;
    limit: number;
    orderBy: string;
};
type JobStatus = 'OPEN' | 'CLOSED' | 'HIDE';

const AdminJobs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [jobs, setJobs] = useState<SearchResult>({
        data: [],
        total: 0,
        page: currentPage,
        limit: 10,
        orderBy: 'createAt:desc',
    });
    const [selectedJob, setSelectedJob] = useState<JobDto | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const userId = useAppSelector((state) => state.user.id);
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
    const [statusFilter, setStatusFilter] = useState<JobStatus | null>(null);

    const dispatch = useAppDispatch();
    const [sortConfig, setSortConfig] = useState<{ key: keyof JobDto; direction: 'asc' | 'desc' }>({
        key: 'createAt',
        direction: 'desc',
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setJobs((prev) => ({
            ...prev,
            page: page,
            limit: pageSize,
        }));
    };

    useEffect(() => {
        if (userId) {
            const delayDebounceFn = setTimeout(() => {
                fetchJobs();
            }, 300);
            return () => clearTimeout(delayDebounceFn);
        }
    }, [userId, currentPage, searchTerm, statusFilter, jobs.orderBy]);

    const fetchJobs = async () => {
        try {
            dispatch(loading());
            const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/job/findAll`, {
                params: {
                    limit: jobs.limit,
                    page: jobs.page,
                    orderBy: jobs.orderBy,
                    search: searchTerm,
                    status: statusFilter,
                },
            });
            const data = response.data.content;
            setJobs((prev) => ({
                ...prev,
                data: data.data,
                limit: data.limit,
                total: data.total,
                orderBy: jobs.orderBy,
            }));
            dispatch(unLoading());
        } catch (err) {
            dispatch(unLoading());
        }
    };

    const handleSortCreateAt = () => {
        setJobs((prev) => ({
            ...prev,
            orderBy: prev.orderBy === 'createAt:desc' ? 'createAt:asc' : 'createAt:desc',
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
                setJobs((prev) => ({
                    ...prev,
                    data: jobs.data.filter((job) => job.id !== selectedJob.id),
                }));
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
    const handleSort = (key: keyof JobDto) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    return (
        <Container fluid className="p-4">
            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h4>Danh sách bài viết</h4>
                    <div className="d-flex gap-2">
                        <InputGroup>
                            <InputGroup.Text>
                                <Search />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Tìm kiếm..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </InputGroup>
                        <Dropdown className="me-2">
                            <Dropdown.Toggle variant="outline-secondary" size="sm">
                                <Filter className="me-1" />
                                {statusFilter ? `Trạng thái: ${statusFilter}` : 'Lọc theo trạng thái'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setStatusFilter(null)}>Tất cả</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatusFilter('OPEN')}>Đang mở</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatusFilter('CLOSED')}>Đang đóng</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatusFilter('HIDE')}>Đang Ẩn</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className="btn-reload" onClick={fetchJobs}>
                            <IoReload size={22} />
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
                                <th onClick={handleSortCreateAt} style={{ cursor: 'pointer' }}>
                                    Tạo ngày
                                    {jobs.orderBy === 'createAt:desc' ? <SortNumericDown /> : <SortNumericUp />}
                                </th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs?.data?.map((job) => (
                                <tr key={job.id}>
                                    <td>{job.title}</td>
                                    <td>{job.salary}</td>
                                    <td>{job.location}</td>
                                    <td>{job.position}</td>
                                    <td>{getStatusBadge(job.status)}</td>
                                    <td>{new Date(job.createAt).toLocaleDateString()}</td>
                                    <td className="btn-actions">
                                        <Button
                                            variant="outline-info"
                                            size="sm"
                                            className="me-1"
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
            <section className="section-box mt-30">
                <div className="container">
                    {jobs.data.length > 0 ? (
                        <>
                            <div className="d-flex justify-content-center mt-4">
                                <Pagination
                                    current={jobs.page}
                                    total={jobs.total}
                                    pageSize={jobs.limit}
                                    onChange={handlePageChange}
                                    itemRender={itemRender}
                                    showTotal={(total, range) =>
                                        `Hiển thị ${range[0]}-${range[1]} trên ${total} việc làm`
                                    }
                                    showSizeChanger
                                    showPrevNextJumpers={false}
                                />
                            </div>
                        </>
                    ) : (
                        <strong>Chưa tìm thấy công việc nào.</strong>
                    )}
                </div>
            </section>

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

export default AdminJobs;
