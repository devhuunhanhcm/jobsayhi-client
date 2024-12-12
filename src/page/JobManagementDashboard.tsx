import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { AiOutlineFileExcel, AiOutlineFilePdf } from 'react-icons/ai';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    Brush,
} from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, subMonths } from 'date-fns';
import axiosInstance from '@/api/AxiosInstance';
import DashboardDataService from '@/service/DashboardService';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

interface DashboardData {
    totalCompanies: number;
    totalUsers: number;
    totalCVFiles: number;
    totalJobPosts: number;
    totalApplications: number;
    barChartData: { name: string; count: number }[];
    monthlyApplications: { month: string; applications: number }[];
    pieChartData: { name: string; value: number }[];
    lineChartData: { date: string; jobPosts: number }[];
}

const JobManagementDashboard: React.FC = () => {
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<Date>(subMonths(new Date(), 1));
    const [endDate, setEndDate] = useState<Date>(new Date());

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await DashboardDataService.getDashboardData(
                    format(startDate, "yyyy-MM-dd'T'HH:mm:ss"),
                    format(endDate, "yyyy-MM-dd'T'HH:mm:ss"),
                );
                setDashboardData(data);
            } catch (error) {
                console.error('Failed to fetch dashboard data', error);
                setError('Failed to load dashboard data. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, [startDate, endDate]);

    const handleExportPDF = async () => {
        try {
            await DashboardDataService.exportToPDF(
                format(startDate, "yyyy-MM-dd'T'HH:mm:ss"),
                format(endDate, "yyyy-MM-dd'T'HH:mm:ss"),
            );
        } catch (error) {
            console.error('PDF Export failed', error);
        }
    };

    const handleExportExcel = async () => {
        try {
            await DashboardDataService.exportToExcel(
                format(startDate, "yyyy-MM-dd'T'HH:mm:ss"),
                format(endDate, "yyyy-MM-dd'T'HH:mm:ss"),
            );
        } catch (error) {
            console.error('Excel Export failed', error);
        }
    };

    if (isLoading) {
        return (
            <Container fluid className="dashboard p-4 text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container fluid className="dashboard p-4">
                <div className="alert alert-danger">{error}</div>
            </Container>
        );
    }

    const processedPieChartData = () => {
        if (!dashboardData?.pieChartData) return [];

        const totalValue = dashboardData.pieChartData.reduce((acc, item) => acc + item.value, 0);
        const threshold = totalValue * 0.05;

        const groupedData = dashboardData.pieChartData.reduce(
            (acc: { data: { name: string; value: number }[]; other: { name: string; value: number } }, item) => {
                if (item.value < threshold) {
                    acc.other.value += item.value;
                } else {
                    acc.data.push(item);
                }
                return acc;
            },
            { data: [], other: { name: 'Other', value: 0 } },
        );

        if (groupedData.other.value > 0) {
            groupedData.data.push(groupedData.other);
        }

        return groupedData.data;
    };

    return (
        <Container fluid className="dashboard p-4">
            <Row>
                <div className="dashboard-date-picker date-picker-container">
                    <strong>Từ ngày:</strong>
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date | null) => date && setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                    />
                    <span>-</span>
                    <DatePicker
                        selected={endDate}
                        onChange={(date: Date | null) => date && setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                    />
                </div>
            </Row>
            {/* Key Metrics */}
            <Row className="mb-4">
                <Col md={2}>
                    <Card bg="primary" text="white" className="text-center border-radius-12">
                        <Card.Body>
                            <Card.Title>Công ty</Card.Title>
                            <h2 className="text-white">{dashboardData?.totalCompanies}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card bg="success" text="white" className="text-center border-radius-12">
                        <Card.Body>
                            <Card.Title>Người dùng</Card.Title>
                            <h2 className="text-white">{dashboardData?.totalUsers}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card bg="info" text="white" className="text-center border-radius-12">
                        <Card.Body>
                            <Card.Title>Hồ sơ CV</Card.Title>
                            <h2 className="text-white">{dashboardData?.totalCVFiles}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card bg="warning" text="white" className="text-center border-radius-12">
                        <Card.Body>
                            <Card.Title>Việc làm</Card.Title>
                            <h2 className="text-white">{dashboardData?.totalJobPosts}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card bg="danger" text="white" className="text-center border-radius-12">
                        <Card.Body>
                            <Card.Title>Ứng tuyển</Card.Title>
                            <h2 className="text-white">{dashboardData?.totalApplications}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2} className="d-flex align-items-center">
                    <Button variant="outline-primary" className="me-2" onClick={handleExportPDF}>
                        <AiOutlineFilePdf /> Xuất PDF
                    </Button>
                    <Button variant="outline-success" onClick={handleExportExcel}>
                        <AiOutlineFileExcel /> Xuất Excel
                    </Button>
                </Col>
            </Row>

            {/* Charts */}
            <Row className="g-4">
                <Col md={6}>
                    <Card>
                        <Card.Header>Tổng quan các thực thể</Card.Header>
                        <Card.Body>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={dashboardData?.barChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip
                                        formatter={(value, name) => [value, name]}
                                        labelStyle={{ color: 'black' }}
                                    />
                                    <Legend />
                                    <Bar dataKey="count" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>Ứng tuyển hàng tháng</Card.Header>
                        <Card.Body>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={dashboardData?.monthlyApplications}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip
                                        formatter={(value, name) => [value, name]}
                                        labelStyle={{ color: 'black' }}
                                    />
                                    <Legend />
                                    <Bar dataKey="applications" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>Phân bố theo thành phố</Card.Header>
                        <Card.Body>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={processedPieChartData()}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {processedPieChartData().map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>Bài đăng việc làm theo thời gian</Card.Header>
                        <Card.Body>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={dashboardData?.lineChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="jobPosts" stroke="#8884d8" />
                                    <Brush dataKey="date" height={30} stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default JobManagementDashboard;
