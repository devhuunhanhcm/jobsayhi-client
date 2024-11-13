import { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getProfile } from '../../service/UserService';

function Header() {
    const isLoged = useAppSelector((state) => state.auth.isLogined) || false;
    const userInfo = useAppSelector((state) => state.user);

    console.log(userInfo);

    useEffect(() => {
        if (isLoged && userInfo === null) {
            const res = getProfile();
            console.log(res);
        }
    }, []);
    return (
        <div>
            <header className="header sticky-bar sticky-top">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <a className="d-flex" href="/">
                                    <img
                                        alt="jobsayhi"
                                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/imgs/logo-small.png`}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                    <li className="has-children">
                                        <a className="active" href="/">
                                            Home
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/">Home 1</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="jobs-grid.html">Find a Job</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="jobs-grid.html">Jobs Grid</a>
                                            </li>
                                            <li>
                                                <a href="jobs-list.html">Jobs List</a>
                                            </li>
                                            <li>
                                                <a href="job-details.html">Jobs Details</a>
                                            </li>
                                            <li>
                                                <a href="job-details-2.html">Jobs Details 2 </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="companies-grid.html">Recruiters</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="companies-grid.html">Recruiters</a>
                                            </li>
                                            <li>
                                                <a href="company-details.html">Company Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="candidates-grid.html">Candidates</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="candidates-grid.html">Candidates Grid</a>
                                            </li>
                                            <li>
                                                <a href="candidate-details.html">Candidate Details</a>
                                            </li>
                                            <li>
                                                <a href="candidate-profile.html">Candidate Profile</a>
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
                                            <li>
                                                <a href="blog-grid-2.html">Blog Grid 2</a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html">Blog Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div className="burger-icon burger-icon-white">
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
                                                    userInfo.avatar ??
                                                    `${
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
                                                <a className="dropdown-item" href="#">
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Logout
                                                </a>
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
            <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
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
                                        <li className="has-children">
                                            <a className="active" href="/">
                                                Home
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/">Home 1</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home 3</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">Home 4</a>
                                                </li>
                                                <li>
                                                    <a href="index-5.html">Home 5</a>
                                                </li>
                                                <li>
                                                    <a href="index-6.html">Home 6</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="jobs-grid.html">Find a Job</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="jobs-grid.html">Jobs Grid</a>
                                                </li>
                                                <li>
                                                    <a href="jobs-list.html">Jobs List</a>
                                                </li>
                                                <li>
                                                    <a href="job-details.html">Jobs Details</a>
                                                </li>
                                                <li>
                                                    <a href="job-details-2.html">Jobs Details 2 </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="companies-grid.html">Recruiters</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="companies-grid.html">Recruiters</a>
                                                </li>
                                                <li>
                                                    <a href="company-details.html">Company Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="candidates-grid.html">Candidates</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="candidates-grid.html">Candidates Grid</a>
                                                </li>
                                                <li>
                                                    <a href="candidate-details.html">Candidate Details</a>
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
                                                <li>
                                                    <a href="blog-grid-2.html">Blog Grid 2</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">Blog Single</a>
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
                                <h6 className="mb-10">Your Account</h6>
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
                            <div className="site-copyright">
                                Copyright 2024 © JobBox. <br />
                                Designed by AliThemes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
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
                                        <li className="has-children">
                                            <a className="active" href="/">
                                                Home
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/">Home 1</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home 3</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">Home 4</a>
                                                </li>
                                                <li>
                                                    <a href="index-5.html">Home 5</a>
                                                </li>
                                                <li>
                                                    <a href="index-6.html">Home 6</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="jobs-grid.html">Find a Job</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="jobs-grid.html">Jobs Grid</a>
                                                </li>
                                                <li>
                                                    <a href="jobs-list.html">Jobs List</a>
                                                </li>
                                                <li>
                                                    <a href="job-details.html">Jobs Details</a>
                                                </li>
                                                <li>
                                                    <a href="job-details-2.html">Jobs Details 2 </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="companies-grid.html">Recruiters</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="companies-grid.html">Recruiters</a>
                                                </li>
                                                <li>
                                                    <a href="company-details.html">Company Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="candidates-grid.html">Candidates</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="candidates-grid.html">Candidates Grid</a>
                                                </li>
                                                <li>
                                                    <a href="candidate-details.html">Candidate Details</a>
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
                                                    <a href="page-reset-password.html">Reset Password</a>
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
                                                <li>
                                                    <a href="blog-grid-2.html">Blog Grid 2</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">Blog Single</a>
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
                                <h6 className="mb-10">Your Account</h6>
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
                            <div className="site-copyright">
                                Copyright 2024 © JobBox. <br />
                                Designed by AliThemes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
