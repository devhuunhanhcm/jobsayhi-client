import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { House, People, Gear, Bell, PersonCircle, List, XLg } from 'react-bootstrap-icons';
import { CiMail, CiSettings } from 'react-icons/ci';
import { FaUsersViewfinder } from 'react-icons/fa6';
import {
    HiChevronDown,
    HiChevronUp,
    HiOutlineBellAlert,
    HiOutlineInformationCircle,
    HiOutlinePlus,
    HiOutlineUserGroup,
} from 'react-icons/hi2';
import { GrArticle } from 'react-icons/gr';
import { MdOutlineBusiness, MdOutlineDashboardCustomize } from 'react-icons/md';
import { useAppSelector } from '@/redux/hooks';
import { logout } from '@/service/AuthService';
import { useNavigate } from 'react-router-dom';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});
    const userInfo = useAppSelector((state) => state.user);
    const navigate = useNavigate();

    React.useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (mobile) setIsSidebarMinimized(true);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarMinimized(!isSidebarMinimized);
    };

    const toggleSubmenu = (menu: string) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className="d-flex vh-100">
            {/* Sidebar */}
            <Nav
                className={`d-flex flex-column bg-light sidebar ${isSidebarMinimized ? 'minimized' : ''}`}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: isSidebarMinimized ? '80px' : '250px',
                    padding: '20px 0',
                    transition: 'width 0.3s',
                    zIndex: 1020,
                    overflowX: 'hidden',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Button variant="light" onClick={toggleSidebar} className="position-absolute top-0 end-0 m-2">
                    {isSidebarMinimized ? <List /> : <XLg />}
                </Button>
                <Nav.Item className="mt-30">
                    <Nav.Link href="/admin" className="text-dark ">
                        <MdOutlineDashboardCustomize className="me-2" size={20} />
                        {!isSidebarMinimized && 'Trang chủ'}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/jobs" className="text-dark ">
                        <GrArticle className="me-2" size={22} />
                        {!isSidebarMinimized && 'Quản lý bài viết'}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/recruiters" className="text-dark ">
                        <FaUsersViewfinder className="me-2" size={22} />
                        {!isSidebarMinimized && 'Nhà tuyển dụng'}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/users" className="text-dark ">
                        <HiOutlineUserGroup className="me-2" size={22} />
                        {!isSidebarMinimized && 'Ứng viên'}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/company" className="text-dark ">
                        <MdOutlineBusiness className="me-2" size={22} />
                        {!isSidebarMinimized && 'Công ty'}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/recruiter/settings" className="text-dark ">
                        <CiSettings className="me-2" size={24} />
                        {!isSidebarMinimized && 'Cài đặt'}
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            {/* Main Content Area */}
            <div
                style={{
                    marginLeft: isSidebarMinimized ? '80px' : '250px',
                    width: isSidebarMinimized ? 'calc(100% - 80px)' : 'calc(100% - 250px)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                }}
            >
                {/* Fixed Header */}
                <Navbar
                    bg="light"
                    className="shadow-sm"
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1000,
                    }}
                >
                    <Container fluid>
                        <div className="ml-20">
                            <a className="d-flex" href="/">
                                <img
                                    alt="jobsayhi"
                                    src={`${import.meta.env.VITE_PUBLIC_URL}/assets/imgs/logo/logo-jobsayhi.png`}
                                    className="logo-header"
                                    height="40px"
                                />
                            </a>
                        </div>
                        <Nav className="d-flex ms-auto align-items-center">
                            <Nav.Item className="me-3">
                                <HiOutlineBellAlert size={20} />
                                <span className="badge bg-danger rounded-circle ms-1">3</span>
                            </Nav.Item>
                            <Nav.Item className="me-3">
                                <CiMail size={20} />
                                <span className="badge bg-danger rounded-circle ms-1">2</span>
                            </Nav.Item>
                            <NavDropdown
                                title={
                                    <div className="d-flex align-items-center">
                                        <PersonCircle size={20} className="me-2" />
                                        {userInfo?.username}
                                    </div>
                                }
                                id="user-dropdown"
                                align="end"
                            >
                                <NavDropdown.Item href="/profile">Tài khoản</NavDropdown.Item>
                                <NavDropdown.Item href="/settings">Cài đặt</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>Đăng xuất</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar>

                {/* Scrollable Content Area */}
                <div
                    style={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        padding: '20px',
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
