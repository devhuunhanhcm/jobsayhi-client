import { useAppSelector } from '@/redux/hooks';
import { updateProfile } from '@/service/ProfileSerivce';
import React, { useEffect, useState } from 'react';
export interface UserProfileDto {
    id: string;
    displayName: string;
    phone: string;
}

const Profile: React.FC = () => {
    const userInfo = useAppSelector((state) => state.user);
    const [userUpdateDto, setUserUpdateDto] = useState<UserProfileDto>();

    const [profileData, setProfileData] = useState<UserProfileDto>({
        id: userInfo?.id || '',
        displayName: userInfo?.email || '',
        phone: userInfo?.phone || '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (userInfo === null) window.location.href = '/login';
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await updateProfile(profileData);
            // Optionally, you could add a success toast or notification here
        } catch (error) {
            // Handle any errors
            console.error('Profile update failed', error);
        }
    };

    return (
        <>
            <section className="section-box-2">
                <div className="container">
                    <div className="banner-hero banner-image-single">
                        <img src="assets/imgs/page/candidates/img.png" alt="jobbox" />
                        <a className="btn-editor" href="#" />
                    </div>
                    <div className="box-company-profile">
                        <div className="image-compay">
                            <img src="assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" />
                        </div>
                        <div className="row mt-10">
                            <div className="col-lg-8 col-md-12">
                                <h5 className="f-18 d-flex align-items-center">
                                    <p>{userInfo.displayName !== null ? userInfo.displayName : 'Chưa có tên'}</p>
                                    <p className="card-location font-regular">Viet Nam</p>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom pt-10 pb-10" />
                </div>
            </section>
            <section className="section-box mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="box-nav-tabs nav-tavs-profile mb-5">
                                <ul className="nav" role="tablist">
                                    <li>
                                        <a
                                            className="btn btn-border aboutus-icon mb-20 active"
                                            href="#tab-my-profile"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-my-profile"
                                            aria-selected="true"
                                        >
                                            Tài khoản
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="btn btn-border recruitment-icon mb-20"
                                            href="#tab-my-jobs"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-my-jobs"
                                            aria-selected="false"
                                        >
                                            Công việc
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="btn btn-border people-icon mb-20"
                                            href="#tab-saved-jobs"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-saved-jobs"
                                            aria-selected="false"
                                        >
                                            Công việc đã lưu
                                        </a>
                                    </li>
                                </ul>
                                <div className="border-bottom pt-10 pb-10" />
                                <div className="mt-20 mb-20">
                                    <a className="link-red" href="#">
                                        Xóa tài khoản
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
                            <div className="content-single">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="tab-my-profile"
                                        role="tabpanel"
                                        aria-labelledby="tab-my-profile"
                                    >
                                        <h3 className="mt-0 mb-15 color-brand-1">Tài khoản</h3>
                                        <div className="mt-35 mb-40 box-info-profie">
                                            <div className="image-profile">
                                                <img
                                                    src="assets/imgs/page/candidates/candidate-profile.png"
                                                    alt="jobbox"
                                                />
                                            </div>
                                            <a className="btn btn-apply">Tải lên avatar</a>
                                            <a className="btn btn-link">Xóa</a>
                                        </div>
                                        <div className="row form-contact">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <label className="font-sm color-text-mutted mb-10">Username</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={userInfo.username}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-sm color-text-mutted mb-10">Tên</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="displayName"
                                                        value={profileData.displayName}
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-sm color-text-mutted mb-10">Email *</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={userInfo.email}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-sm color-text-mutted mb-10">
                                                        Số điện thoại
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="phone"
                                                        value={profileData.phone}
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
                                                </div>

                                                <div className="border-bottom pt-10 pb-10 mb-30" />

                                                <div className="box-button mt-15">
                                                    <button
                                                        className="btn btn-apply-big font-md font-bold"
                                                        onClick={handleSubmit}
                                                    >
                                                        Save All Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="tab-my-jobs"
                                        role="tabpanel"
                                        aria-labelledby="tab-my-jobs"
                                    >
                                        <h3 className="mt-0 color-brand-1 mb-50">My Jobs</h3>
                                        <div className="row display-list">
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img
                                                                        src="assets/imgs/brands/brand-5.png"
                                                                        alt="jobBox"
                                                                    />
                                                                </div>
                                                                <div className="right-info">
                                                                    <a className="name-job" href="">
                                                                        Linkedin
                                                                    </a>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <a className="btn btn-grey-small mr-5" href="#">
                                                                    Adobe XD
                                                                </a>
                                                                <a className="btn btn-grey-small mr-5" href="#">
                                                                    Figma
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <a href="job-details.html">React Native Web Developer</a>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Fulltime</span>
                                                            <span className="card-time">
                                                                <span>4</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur
                                                        </p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$500</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img
                                                                        src="assets/imgs/brands/brand-6.png"
                                                                        alt="jobBox"
                                                                    />
                                                                </div>
                                                                <div className="right-info">
                                                                    <a className="name-job" href="">
                                                                        Quora JSC
                                                                    </a>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <a className="btn btn-grey-small mr-5" href="#">
                                                                    Adobe XD
                                                                </a>
                                                                <a className="btn btn-grey-small mr-5" href="#">
                                                                    Figma
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <a href="job-details.html">Senior System Engineer</a>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Part time</span>
                                                            <span className="card-time">
                                                                <span>5</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$800</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img
                                                                        src="assets/imgs/brands/brand-7.png"
                                                                        alt="jobBox"
                                                                    />
                                                                </div>
                                                                <div className="right-info">
                                                                    <a className="name-job" href="">
                                                                        Nintendo
                                                                    </a>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <a className="btn btn-grey-small mr-5" href="#">
                                                                    Adobe XD
                                                                </a>
                                                                <a className="btn btn-grey-small mr-5" href="#">
                                                                    Figma
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <a href="job-details.html">Products Manager</a>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                <span>6</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img
                                                                        src="assets/imgs/brands/brand-8.png"
                                                                        alt="jobBox"
                                                                    />
                                                                </div>
                                                                <div className="right-info">
                                                                    <a className="name-job" href="">
                                                                        Periscope
                                                                    </a>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <a className="btn btn-grey-small mr-5" href="#">
                                                                    Adobe XD
                                                                </a>
                                                                <a className="btn btn-grey-small mr-5" href="#">
                                                                    Figma
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <a href="job-details.html">Lead Quality Control QA</a>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                <span>6</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="paginations">
                                            <ul className="pager">
                                                <li>
                                                    <a className="pager-prev" href="#" />
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        3
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        4
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        5
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number active" href="#">
                                                        6
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        7
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-next" href="#" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="tab-saved-jobs"
                                        role="tabpanel"
                                        aria-labelledby="tab-saved-jobs"
                                    >
                                        <h3 className="mt-0 color-brand-1 mb-50">Saved Jobs</h3>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <a className="name-job" href="company-details.html">
                                                                LinkedIn
                                                            </a>
                                                            <span className="location-small">New York, US</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">UI / UX Designer fulltime</a>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Fulltime</span>
                                                            <span className="card-time">
                                                                4<span> minutes ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur
                                                        </p>
                                                        <div className="mt-30">
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Adobe XD
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Figma
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Photoshop
                                                            </a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$500</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <a className="name-job" href="company-details.html">
                                                                Adobe Ilustrator
                                                            </a>
                                                            <span className="location-small">New York, US</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">Full Stack Engineer</a>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Part time</span>
                                                            <span className="card-time">
                                                                5<span> minutes ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="mt-30">
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                React
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                NodeJS
                                                            </a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$800</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <a className="name-job" href="company-details.html">
                                                                Bing Search
                                                            </a>
                                                            <span className="location-small">New York, US</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">Java Software Engineer</a>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                6<span> minutes ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="mt-30">
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Python
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                AWS
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Photoshop
                                                            </a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <a className="name-job" href="company-details.html">
                                                                Dailymotion
                                                            </a>
                                                            <span className="location-small">New York, US</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">Frontend Developer</a>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                6<span> minutes ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="mt-30">
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Typescript
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Java
                                                            </a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <a className="name-job" href="company-details.html">
                                                                Linkedin
                                                            </a>
                                                            <span className="location-small">New York, US</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">React Native Web Developer</a>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Fulltime</span>
                                                            <span className="card-time">
                                                                4<span> minutes ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur
                                                        </p>
                                                        <div className="mt-30">
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="jobs-grid.html"
                                                            >
                                                                Angular
                                                            </a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$500</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <a className="name-job" href="company-details.html">
                                                                Quora JSC
                                                            </a>
                                                            <span className="location-small">New York, US</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">Senior System Engineer</a>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Part time</span>
                                                            <span className="card-time">
                                                                5<span> minutes ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="mt-30">
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                PHP
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                Android
                                                            </a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$800</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <a className="name-job" href="company-details.html">
                                                                Nintendo
                                                            </a>
                                                            <span className="location-small">New York, US</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">Products Manager</a>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                6<span> minutes ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="mt-30">
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                ASP .Net
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                Figma
                                                            </a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <a className="name-job" href="company-details.html">
                                                                Periscope
                                                            </a>
                                                            <span className="location-small">New York, US</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">Lead Quality Control QA</a>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                6<span> minutes ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="mt-30">
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                iOS
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                Laravel
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                Golang
                                                            </a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <a className="name-job" href="company-details.html">
                                                                Periscope
                                                            </a>
                                                            <span className="location-small">New York, US</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <a href="job-details.html">Lead Quality Control QA</a>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                6<span> minutes ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                            Recusandae architecto eveniet, dolor quo repellendus
                                                            pariatur.
                                                        </p>
                                                        <div className="mt-30">
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                iOS
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                Laravel
                                                            </a>
                                                            <a
                                                                className="btn btn-grey-small mr-5"
                                                                href="job-details.html"
                                                            >
                                                                Golang
                                                            </a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div
                                                                        className="btn btn-apply-now"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalApplyJobForm"
                                                                    >
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="paginations">
                                            <ul className="pager">
                                                <li>
                                                    <a className="pager-prev" href="#" />
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        3
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        4
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        5
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number active" href="#">
                                                        6
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-number" href="#">
                                                        7
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="pager-next" href="#" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
