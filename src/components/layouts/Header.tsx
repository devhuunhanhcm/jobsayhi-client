import { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { getProfile } from '@/service/UserService';
import { logout } from '@/service/AuthService';
import { useNavigate } from 'react-router-dom';
import { RiVipCrownFill } from 'react-icons/ri';

function Header() {
    const isLoged = useAppSelector((state) => state.auth.isLogined) || false;
    const userInfo = useAppSelector((state) => state.user) || null;
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (isLoged && (!userInfo || !userInfo.id)) {
                try {
                    await getProfile();
                } catch (error) {
                    console.error('Lỗi khi lấy thông tin người dùng:', error);
                }
            }
        };

        fetchUserProfile();
    }, [isLoged, userInfo]);

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
                                        <a href="companies-grid.html">Tuyển Dụng</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="companies-grid.html">Tuyển Dụng</a>
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
                                        <a href="blog-grid.html">Blog</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="blog-grid.html">Blog</a>
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
                                                <a href="/upload">
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
                                        <button
                                            className="dropdown-toggle d-flex align-items-center account-bar-button"
                                            type="button"
                                            id="userDropdown"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src={
                                                    userInfo.avatar
                                                        ? `${
                                                              import.meta.env.VITE_PUBLIC_URL
                                                          }/assets/imgs/avatar/avatar-default-icon.png`
                                                        : `${
                                                              import.meta.env.VITE_PUBLIC_URL
                                                          }/assets/imgs/avatar/avatar-default-icon.png`
                                                }
                                                alt="User Avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: 40 }}
                                            />
                                            <span>{userInfo.username}</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="userDropdown">
                                            <li>
                                                <a className="dropdown-item" href="/profile">
                                                    Tài khoản
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Cài đặt
                                                </a>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" onClick={handleLogout}>
                                                    Đăng xuất
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="block-signin">
                                    <a className="text-link-bd-btom hover-up" href="/register">
                                        Register
                                    </a>
                                    <a className="btn btn-default btn-shadow ml-40 hover-up" href="/login">
                                        Sign in
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
                                            <a href="companies-grid.html">Tuyển Dụng</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="companies-grid.html">Tuyển Dụng</a>
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
                                            <a href="blog-grid.html">Pages</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="page-about.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="page-pricing.html">Pricing Plan</a>
                                                </li>
                                                <li>
                                                    <a href="page-contact.html">Contact Us</a>
                                                </li>
                                                <li>
                                                    <a href="/register">Register</a>
                                                </li>
                                                <li>
                                                    <a href="/login">Signin</a>
                                                </li>
                                                <li>
                                                    <a href="/reset-password">Reset Password</a>
                                                </li>
                                                <li>
                                                    <a href="page-content-protected.html">Content Protected</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="blog-grid.html">Blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-grid.html">Blog Grid</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                Dashboard
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Tài khoản</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <a href="#">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Work Preferences</a>
                                    </li>
                                    <li>
                                        <a href="#">Account Settings</a>
                                    </li>
                                    <li>
                                        <a href="#">Go Pro</a>
                                    </li>
                                    <li>
                                        <a href="page-signin.html">Sign Out</a>
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
