import { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { getProfile } from '@/service/UserService';
import { logout } from '@/service/AuthService';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiVipCrownFill } from 'react-icons/ri';
import { NavDropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { jwtDecode } from 'jwt-decode';
import { JWTPayload } from './ProtectedRoute';
import NotificationDropdown from './DropdownNotification';
import { IoClose } from 'react-icons/io5';
function Header() {
    const isLoged = useAppSelector((state) => state.auth.isLogined) || false;
    const userInfo = useAppSelector((state) => state.user) || null;
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const token = useAppSelector((state) => state.auth.token);
    const [currentRole, setCurrentRole] = useState<string>('');

    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode<JWTPayload>(token);
            const userRoles = decoded.authorities[0];
            setCurrentRole(userRoles);
        }
    }, [token]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            {/* header */}
            <header className="header sticky-bar stick">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <a className="d-flex" href="/">
                                    <img
                                        alt="jobsayhi"
                                        src={`/assets/imgs/logo/logo-jobsayhi.png`}
                                        className="logo-header"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                    <li>
                                        <a className={isActive('/')} href="/">
                                            Trang chủ
                                        </a>
                                    </li>
                                    <li className="has-children">
                                        <a href="/find" className={isActive('/find')}>
                                            Việc làm
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/find" className={isActive('/find')}>
                                                    Việc làm
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="/company" className={isActive('/company')}>
                                            Nhà tuyển dụng
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/company" className={isActive('/company')}>
                                                    Nhà tuyển dụng mới nhất
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {currentRole.length > 0 && currentRole === 'ROLE_COMPANY' ? (
                                        <li className="has-children">
                                            <a href="/recruiter" className={isActive('/recruiter')}>
                                                Tuyển Dụng
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/recruiter" className={isActive('/recruiter')}>
                                                        Tuyển Dụng
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    ) : (
                                        ''
                                    )}

                                    <li className="has-children">
                                        <a href="/blog" className={isActive('/blog')}>
                                            Blog
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/blog" className={isActive('/blog')}>
                                                    Blog
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#!">CV</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/my-cv" className={isActive('/my-cv')}>
                                                    Quản lý CV
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/upload" className={isActive('/upload')}>
                                                    Tải lên CV
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/search-by-cv" className={isActive('/search-by-cv')}>
                                                    <RiVipCrownFill size={18} color="#f1c40f" /> Tìm việc qua CV
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {currentRole.length > 0 && currentRole === 'ROLE_ADMIN' ? (
                                        <li>
                                            <a href="/admin" className={isActive('/admin')}>
                                                Admin
                                            </a>
                                        </li>
                                    ) : (
                                        ''
                                    )}
                                </ul>
                            </nav>
                            <div
                                onClick={() => setShowMobileMenu(!showMobileMenu)}
                                className="burger-icon burger-icon-white"
                            >
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        <div className="header-right">
                            {isLoged && userInfo ? (
                                <div className="container mt-5 d-flex align-items-center">
                                    <NotificationDropdown />
                                    <div className="dropdown account-bar mr-20">
                                        <NavDropdown
                                            title={
                                                <div className="d-inline-flex align-items-center">
                                                    <img
                                                        src={userInfo.avatar || 'https://placehold.co/20'}
                                                        alt="avatar"
                                                        className="rounded-circle me-2"
                                                        width={40}
                                                        height={40}
                                                        style={{ objectFit: 'cover', flexShrink: 0 }}
                                                    />
                                                    {userInfo.username}
                                                </div>
                                            }
                                            id="user-dropdown-header"
                                            align="end"
                                        >
                                            <NavDropdown.Item href="/profile">Tài khoản</NavDropdown.Item>
                                            <NavDropdown.Item>Cài đặt</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={handleLogout}>Đăng xuất</NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                </div>
                            ) : (
                                <div className="block-signin">
                                    <a className="text-link-bd-btom hover-up" href="/register">
                                        Đăng ký
                                    </a>
                                    <a className="btn btn-default btn-shadow ml-40 hover-up" href="/login">
                                        Đăng nhập
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {/* header mobile */}
            <div
                className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar"
                style={{
                    visibility: `${showMobileMenu ? 'unset' : 'hidden'}`,
                    opacity: `${showMobileMenu ? '1' : '0'}`,
                }}
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="burger-icon burger-icon-white"
                        >
                            <IoClose size={24} />
                        </div>
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                {/* mobile menu start*/}
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li>
                                            <a className={isActive('/')} href="/">
                                                Trang chủ
                                            </a>
                                        </li>
                                        <li className="has-children">
                                            <a href="/find" className={isActive('/find')}>
                                                Việc làm
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/find" className={isActive('/find')}>
                                                        Danh sách việc làm
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        {currentRole.length > 0 && currentRole === 'ROLE_COMPANY' ? (
                                            <li className="has-children">
                                                <a href="/recruiter" className={isActive('/recruiter')}>
                                                    Tuyển Dụng
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="/recruiter" className={isActive('/recruiter')}>
                                                            Tuyển Dụng
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        ) : (
                                            ''
                                        )}

                                        <li className="has-children">
                                            <a href="/blog" className={isActive('/blog')}>
                                                Blog
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/blog" className={isActive('/blog')}>
                                                        Blog
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="/search-by-cv" className={isActive('/search-by-cv')}>
                                                Cv
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/my-cv" className={isActive('/my-cv')}>
                                                        Quản lý CV
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/upload" className={isActive('/upload')}>
                                                        Tải lên CV
                                                    </a>
                                                </li>
                                                <a href="/search-by-cv" className={isActive('/search-by-cv')}>
                                                    <RiVipCrownFill size={18} color="#f1c40f" /> Tìm việc qua CV
                                                </a>
                                            </ul>
                                        </li>
                                        {currentRole.length > 0 && currentRole === 'ROLE_ADMIN' ? (
                                            <li>
                                                <a href="/admin" className={isActive('/admin')}>
                                                    Admin
                                                </a>
                                            </li>
                                        ) : (
                                            ''
                                        )}
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Tài khoản</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <a href="/profile">Tài khoản</a>
                                    </li>
                                    <li>
                                        <a href="/settings">Cài đặt</a>
                                    </li>
                                    <li>
                                        <a onClick={handleLogout}>Đăng xuất</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
