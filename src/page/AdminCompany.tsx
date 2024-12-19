import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Badge, Dropdown, Card, Modal, InputGroup, Form, Image } from 'react-bootstrap';
import { Eye, Pencil, Filter, SortNumericDown, SortNumericUp, Search } from 'react-bootstrap-icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import { IoReload } from 'react-icons/io5';
import { itemRender } from './FindJob';
import Pagination from 'rc-pagination';
import axiosInstance from '@/api/AxiosInstance';

export interface UserDto {
    id: string;
    name: string;
    phone: string;
    email: string;
    avatarUrl: string;
    address: string;
    noEmployees: string;
    introduction: null;
    establishDate: string;
    verified: boolean;
}

interface ApiResponse {
    hasErrors: boolean;
    content: UserDto[];
    errors: string;
    status: number;
    timestamp: string;
}
type SearchResult = {
    data: UserDto[];
    total: number;
    page: number;
    limit: number;
    orderBy: string;
};

const AdminCompany: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [users, setUsers] = useState<SearchResult>({
        data: [],
        total: 0,
        page: currentPage,
        limit: 10,
        orderBy: 'establishDate:desc',
    });
    const [selectedUser, setSelectedUser] = useState<UserDto | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const userId = useAppSelector((state) => state.user.id);
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
    const [statusFilter, setStatusFilter] = useState<boolean | null>(false);

    const dispatch = useAppDispatch();
    const [sortConfig, setSortConfig] = useState<{ key: keyof UserDto; direction: 'asc' | 'desc' }>({
        key: 'establishDate',
        direction: 'desc',
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setUsers((prev) => ({
            ...prev,
            page: page,
            limit: pageSize,
        }));
    };

    useEffect(() => {
        if (userId) {
            const delayDebounceFn = setTimeout(() => {
                fetchUser();
            }, 300);
            return () => clearTimeout(delayDebounceFn);
        }
    }, [userId, currentPage, searchTerm, statusFilter, users.orderBy]);

    const fetchUser = async () => {
        try {
            dispatch(loading());
            const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/company/findAll`, {
                params: {
                    limit: users.limit,
                    page: users.page,
                    orderBy: users.orderBy,
                    search: searchTerm,
                },
            });
            const data = response.data.content;
            setUsers((prev) => ({
                ...prev,
                data: data.data,
                limit: data.limit,
                total: data.total,
                orderBy: users.orderBy,
            }));
            dispatch(unLoading());
        } catch (err) {
            dispatch(unLoading());
        }
    };

    const handleSortEstablishDate = () => {
        setUsers((prev) => ({
            ...prev,
            orderBy: prev.orderBy === 'establishDate:desc' ? 'establishDate:asc' : 'establishDate:desc',
        }));
    };

    const confirmDeleteJob = (job: UserDto) => {
        setSelectedUser(job);
        setShowDeleteConfirmModal(true);
    };

    const getStatusBadge = (status: boolean) => {
        if (status) return <Badge bg="success">Mở</Badge>;
        return <Badge bg="danger">Đóng</Badge>;
    };

    const handleSort = (key: keyof UserDto) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    return (
        <Container fluid className="p-4">
            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h4>Danh sách công ty</h4>
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
                                <Dropdown.Item onClick={() => setStatusFilter(true)}>Đang mở</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatusFilter(false)}>Đang đóng</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className="btn-reload" onClick={fetchUser}>
                            <IoReload size={22} />
                        </Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Avatar</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th onClick={handleSortEstablishDate} style={{ cursor: 'pointer' }}>
                                    Tạo ngày
                                    {users.orderBy === 'establishDate:desc' ? <SortNumericDown /> : <SortNumericUp />}
                                </th>
                                <th>Status</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.data?.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>
                                        <div className="d-flex aligns-item-center h-100">
                                            <Image
                                                className="avatar-circle"
                                                src={user.avatarUrl || 'https://placehold.co/50'}
                                                rounded
                                            />
                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{new Date(user.establishDate).toLocaleDateString()}</td>
                                    <td>{getStatusBadge(user.verified)}</td>
                                    <td>
                                        <div className="btn-actions">
                                            <Button
                                                variant="outline-info"
                                                size="sm"
                                                className="me-1"
                                                href={`/recruiter/manager-applies?id=${user.id}`}
                                            >
                                                <Eye />
                                            </Button>
                                            <Button
                                                variant="outline-warning"
                                                href={`/recruiter/edit?id=${user.id}`}
                                                size="sm"
                                                className="me-1"
                                            >
                                                <Pencil />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <section className="section-box mt-30">
                <div className="container">
                    {users.data.length > 0 ? (
                        <>
                            <div className="d-flex justify-content-center mt-4">
                                <Pagination
                                    current={users.page}
                                    total={users.total}
                                    pageSize={users.limit}
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
                    {selectedUser && (
                        <div>
                            <p>
                                <strong>Avatar:</strong>{' '}
                                <Image src={selectedUser.avatarUrl || 'https://placehold.co/50'} rounded />
                            </p>
                            <p>
                                <strong>Tên:</strong> {selectedUser.name}
                            </p>
                            <p>
                                <strong>Phone:</strong> {selectedUser.phone}
                            </p>
                            <p>
                                <strong>Email:</strong> {selectedUser.email}
                            </p>
                            <p>
                                <strong>Verified:</strong> {selectedUser.establishDate}
                            </p>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default AdminCompany;
