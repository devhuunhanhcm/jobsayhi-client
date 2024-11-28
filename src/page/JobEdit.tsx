import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { IoLocationOutline } from 'react-icons/io5';
import axios from 'axios';
import axiosInstance from '@/api/AxiosInstance';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import toast from 'react-hot-toast';
import { BiCategory } from 'react-icons/bi';
import { getJobDetails } from '@/service/JobService';

interface Category {
    id: string;
    name: string;
    description: string;
}

interface CategoryResponse {
    hasErrors: boolean;
    content: Category[];
    errors: string;
    status: number;
    timestamp: string;
}

const POSITIONS = [
    { value: 'FRESHER', label: 'Fresher' },
    { value: 'JUNIOR', label: 'Junior' },
    { value: 'MIDDLE', label: 'Middle' },
    { value: 'SENIOR', label: 'Senior' },
    { value: 'LEAD', label: 'Lead' },
    { value: 'EXPERT', label: 'Expert' },
];
const STATUS = [
    { value: 'OPEN', label: 'Mở đăng ký' },
    { value: 'CLOSED', label: 'Đóng đăng ký' },
    { value: 'HIDE', label: 'Ẩn bài viết' },
];

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        minHeight: '48px',
        borderRadius: '6px',
        boxShadow: 'none',
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#6c757d',
    }),
    option: (provided: any, state: { isSelected: boolean }) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#f05123' : 'white',
        '&:hover': {
            backgroundColor: state.isSelected ? '#f05123' : '#f2f4f8',
        },
    }),
};
interface JobDto {
    id?: string;
    category: { value: string; label: string } | null;
    createAt?: string;
    lastModifiedAt?: string;
    title: string;
    salary: string;
    location: { value: string; label: string } | null;
    experience: string;
    position: { value: string; label: string } | null;
    status: { value: string; label: string } | null;
    description: string;
    requirements: string;
    benefits: string;
    workingTime: string;
    workingLocation: string;
    deadline: Date | null;
}
interface LocationData {
    Id: string;
    Name: string;
    Cities: Array<{
        Id: string;
        Name: string;
    }>;
}
interface SelectOption {
    value: string;
    label: string;
}

const JobEdit: React.FC = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const jobId = queryParams.get('id') || '';

    const [locations, setLocations] = useState<SelectOption[]>([]);
    const [categories, setCategories] = useState<SelectOption[]>([]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [jobForm, setJobForm] = useState<JobDto>({
        title: '',
        salary: '',
        location: null,
        experience: '',
        position: null,
        category: null,
        status: null,
        description: '',
        requirements: '',
        benefits: '',
        workingTime: '',
        workingLocation: '',
        deadline: null,
    });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get<CategoryResponse>('http://localhost:8080/api/v1/category');
                const categoryOptions: SelectOption[] = response.data.content.map((category) => ({
                    value: category.id,
                    label: category.name,
                }));

                setCategories(categoryOptions);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get<LocationData[]>(
                    'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
                );
                const locationOptions: SelectOption[] = response.data.map((location) => ({
                    value: location.Name,
                    label: location.Name,
                }));
                setLocations(locationOptions);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };
        fetchLocations();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setJobForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { category, ...jobData } = jobForm;
        console.log('dto', { jobForm });
        const data = {
            ...jobData,
            status: jobForm.status?.value,
            location: jobForm.location?.value,
            categoryId: jobForm.category?.value,
            position: jobForm.position?.value,
            deadline: jobForm.deadline?.toISOString(),
        };
        console.log('Data gui', data);

        try {
            dispatch(loading());

            const response = await axiosInstance.put(`${import.meta.env.VITE_API_URL}/job/${jobForm.id}`, data);

            if (!response.data.hasErrors) {
                toast.success('Cập nhật bài viết thành công.');
                setTimeout(() => navigate('/recruiter/job-list'), 2000);
            }
            dispatch(unLoading());
        } catch (err) {
            toast.error(err instanceof Error ? err.message : 'Đã xảy ra lỗi');
            dispatch(unLoading());
        }
    };
    const getJob = async () => {
        if (jobId && locations.length > 0 && categories.length > 0) {
            const res = await getJobDetails(jobId);
            console.log(res);
            const { lastModifiedAt, company, ...data } = res;
            setJobForm((prev) => ({
                ...prev,
                ...data,
                status: STATUS.find((t) => t.value === res?.status),
                location: locations.find((t) => t.label === res?.location) || null,
                position: POSITIONS.find((t) => t.value === res?.position) || null,
                category: categories.find((t) => t.value === res?.categoryId) || null,
                deadline: res?.deadline ? new Date(res.deadline) : null,
            }));
        }
    };

    useEffect(() => {
        if (locations.length > 0 && categories.length > 0) {
            getJob();
        }
    }, [jobId, locations, categories]);

    return (
        <Container fluid className="p-4">
            <Card>
                <Card.Header>Tạo bài viết</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tiêu đề</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={jobForm.title}
                                        onChange={handleInputChange}
                                        placeholder="Thực tập sinh ..."
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Lương</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="salary"
                                        value={jobForm.salary}
                                        onChange={handleInputChange}
                                        placeholder="Thỏa thuận, up to 1000$..."
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Địa điểm</Form.Label>
                                    <Select
                                        value={jobForm.location}
                                        onChange={(option) => setJobForm((prev) => ({ ...prev, location: option }))}
                                        options={locations}
                                        placeholder="Chọn địa điểm"
                                        isClearable
                                        styles={customStyles}
                                        components={{
                                            IndicatorSeparator: () => <IoLocationOutline />,
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Vị trí</Form.Label>
                                    <Select
                                        value={jobForm.position}
                                        onChange={(option) => setJobForm((prev) => ({ ...prev, position: option }))}
                                        options={POSITIONS}
                                        placeholder="Chọn vị trí mong muốn"
                                        isClearable
                                        styles={customStyles}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mô tả ngắn</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="description"
                                        value={jobForm.description}
                                        onChange={handleInputChange}
                                        rows={3}
                                        placeholder="Mô tả ngắn công việc..."
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Hạn nộp</Form.Label>
                                    <DatePicker
                                        selected={jobForm.deadline}
                                        onChange={(date: Date | null) => {
                                            if (date) {
                                                setJobForm((prev) => ({ ...prev, deadline: date }));
                                            }
                                        }}
                                        className="form-control d-block"
                                        placeholderText="Chọn thời hạn"
                                        showTimeSelect
                                        dateFormat="Pp"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kinh nghiệm</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="experience"
                                        value={jobForm.experience}
                                        onChange={handleInputChange}
                                        placeholder="3-5 năm kinh nghiệm"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Yêu cầu</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="requirements"
                                        value={jobForm.requirements}
                                        onChange={handleInputChange}
                                        rows={3}
                                        placeholder="Yêu cầu kỹ năng..."
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Quyền lợi</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="benefits"
                                        value={jobForm.benefits}
                                        onChange={handleInputChange}
                                        rows={3}
                                        placeholder="Quyền lợi cho nhân viên..."
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Working Time</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="workingTime"
                                        value={jobForm.workingTime}
                                        onChange={handleInputChange}
                                        placeholder="9 AM - 6 PM"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Địa điểm làm việc</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="workingLocation"
                                        value={jobForm.workingLocation}
                                        onChange={handleInputChange}
                                        placeholder="Địa chỉ làm việc"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Trạng thái bài viết</Form.Label>
                                    <Select
                                        value={jobForm.status}
                                        onChange={(option) => setJobForm((prev) => ({ ...prev, status: option }))}
                                        options={STATUS}
                                        placeholder="Trạng thái của bài viết"
                                        isClearable
                                        styles={customStyles}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Danh mục</Form.Label>
                                    <Select
                                        value={jobForm.category}
                                        onChange={(option) => setJobForm((prev) => ({ ...prev, category: option }))}
                                        options={categories}
                                        placeholder="Chọn danh mục"
                                        isClearable
                                        styles={customStyles}
                                        components={{
                                            IndicatorSeparator: () => <BiCategory />,
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button type="submit" className="w-100 background-primary">
                            Cập nhật
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default JobEdit;
