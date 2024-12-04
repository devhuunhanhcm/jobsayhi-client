import { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { getProfile } from '@/service/UserService';
import { logout } from '@/service/AuthService';
import { useNavigate } from 'react-router-dom';
import { RiVipCrownFill } from 'react-icons/ri';
import { NavDropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';

function Header() {
    const isLoged = useAppSelector((state) => state.auth.isLogined) || false;
    const userInfo = useAppSelector((state) => state.user) || null;
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

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
            <header className="header sticky-bar stick">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <a className="d-flex" href="/">
                                    <img
                                        alt="jobsayhi"
                                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/imgs/logo/logo-jobsayhi.png`}
                                        className="logo-header"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                    <li>
                                        <a className="active" href="/">
                                            Trang chủ
                                        </a>
                                    </li>
                                    <li className="has-children">
                                        <a href="/find">Việc làm</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/find">Việc làm</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="/recruiter">Tuyển Dụng</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/recruiter">Tuyển Dụng</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="candidates-grid.html">Ứng viên</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="candidates-grid.html">Ứng viên</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-children">
                                        <a href="/blog">Blog</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/blog">Blog</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#!">CV</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/my-cv">Quản lý CV</a>
                                            </li>
                                            <li>
                                                <a href="/upload">Tải lên CV</a>
                                            </li>
                                            <li>
                                                <a href="/search-by-cv">
                                                    <RiVipCrownFill size={18} color="#f1c40f" /> Tìm việc qua CV
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <div className="container mt-5">
                                    <div className="dropdown account-bar">
                                        <NavDropdown
                                            title={
                                                <div className="d-inline-flex align-items-center">
                                                    <PersonCircle size={20} className="me-2" />
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
            <div
                className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar"
                style={{
                    visibility: `${showMobileMenu ? 'unset' : 'hidden'}`,
                    opacity: `${showMobileMenu ? '1' : '0'}`,
                }}
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-search mobile-header-border mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search…" />
                                    <i className="fi-rr-search" />
                                </form>
                            </div>
                            <div className="mobile-menu-wrap mobile-header-border">
                                {/* mobile menu start*/}
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li>
                                            <a className="active" href="/">
                                                Trang chủ
                                            </a>
                                        </li>
                                        <li className="has-children">
                                            <a href="/find">Việc làm</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/find">Danh sách việc làm</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="/recruiter">Tuyển Dụng</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/recruiter">Tuyển Dụng</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="candidates-grid.html">Ứng viên</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="candidates-grid.html">Top những ứng viên</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="blog-grid.html">Blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="page-about.html">Blog</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="/search-by-cv">Cv</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/my-cv">Quản lý CV</a>
                                                </li>
                                                <li>
                                                    <a href="/upload">Tải lên CV</a>
                                                </li>
                                                <a href="/search-by-cv">
                                                    <RiVipCrownFill size={18} color="#f1c40f" /> Tìm việc qua CV
                                                </a>
                                            </ul>
                                        </li>
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
                                        <button onClick={handleLogout}>Đăng xuất</button>
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
