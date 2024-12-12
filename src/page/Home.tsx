import React, { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css';
import SearchingBar from '@/components/layouts/SearchingBar';
import JobCard from '../components/layouts/JobCard';

function Home() {
    useEffect(() => {
        new WOW().init();
    }, []);

    return (
        <main className="main">
            <SearchingBar />
            <section className="section-box mt-70">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                            Việc làm IT mới nhất
                        </h2>
                        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                            Tìm kiếm ngay những công việc IT mới nhất trong ngày.
                        </p>
                    </div>
                    <div className="mt-50">
                        <div className="tab-content" id="myTabContent-1">
                            <div
                                className="tab-pane fade show active"
                                id="tab-job-1"
                                role="tabpanel"
                                aria-labelledby="tab-job-1"
                            >
                                <JobCard />
                            </div>
                            <div className="text-center">
                                <a className="btn btn-brand-1 btn-icon-load hover-up" href="/find">
                                    Xem thêm
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-15 mb-lg-0 wow animate__animated animate__fadeInLeft">
                            <div className="box-radius-8 bg-urgent hover-up">
                                <div className="image">
                                    <figure>
                                        <img
                                            width={150}
                                            height={150}
                                            style={{ objectFit: 'contain' }}
                                            src="assets/imgs/page/homepage2/job-tools.png"
                                            alt="jobBox"
                                        />
                                    </figure>
                                </div>
                                <div className="text-info">
                                    <h3>Công cụ tìm kiếm việc làm sử dụng AI</h3>
                                    <p className="font-sm color-text-paragraph-2">
                                        Sử dụng công cụ tìm kiếm việc làm của chúng tôi để tìm kiếm các công việc mới
                                        nhất và phù hợp nhất với bạn.
                                    </p>
                                    <div className="mt-15">
                                        <a className="btn btn-arrow-right" href="/search-by-cv">
                                            Tìm hiểu thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow animate__animated animate__fadeInRight">
                            <div className="box-radius-8 bg-9 hover-up">
                                <div className="image">
                                    <figure>
                                        <img
                                            width={150}
                                            height={150}
                                            style={{ objectFit: 'contain' }}
                                            src="assets/imgs/page/homepage2/planning-job.png"
                                            alt="jobBox"
                                        />
                                    </figure>
                                </div>
                                <div className="text-info">
                                    <h3>Công Việc mới nhất</h3>
                                    <p className="font-sm color-text-paragraph-2">
                                        Tìm kiếm các công việc mới nhất và phù hợp nhất với yêu cầu của bạn từ cơ sở dữ
                                        liệu của chúng tôi.
                                    </p>
                                    <div className="mt-15">
                                        <a className="btn btn-arrow-right" href="/find">
                                            Tìm hiểu thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box bg-15 pt-50 pb-50 mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center mb-30 wow animate__animated animate__fadeInLeft">
                            <img
                                className="img-job-search mt-20"
                                src="assets/imgs/page/homepage3/img-job-search.png"
                                alt="jobBox"
                            />
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 wow animate__animated animate__fadeInRight">
                            <h2 className="mb-40">Tìm kiếm việc làm cho những người đam mê khởi nghiệp</h2>
                            <div className="box-checkbox mb-30">
                                <h6>Tạo tài khoản</h6>
                                <p className="font-md color-text-paragraph-2">
                                    Hướng dẫn tạo tài khoản để bắt đầu tìm kiếm việc làm phù hợp với bạn.
                                </p>
                            </div>
                            <div className="box-checkbox mb-30">
                                <h6>Tìm kiếm công việc</h6>
                                <p className="font-md color-text-paragraph-2">
                                    Hướng dẫn tìm kiếm công việc theo các tiêu chí bạn mong muốn.
                                </p>
                            </div>
                            <div className="box-checkbox mb-30">
                                <h6>Lưu &amp; Ứng tuyển</h6>
                                <p className="font-md color-text-paragraph-2">
                                    Hướng dẫn lưu và ứng tuyển các công việc bạn quan tâm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50 mb-20">
                <div className="box-newsletter box-newsletter-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-12 text-center d-none d-xl-block">
                                <img src="/assets/imgs/page/homepage4/img-newsletter.png" alt="joxBox" />
                            </div>
                            <div className="col-xl-8 col-lg-12 col-12 text-center">
                                <div className="d-inline-block text-start">
                                    <h2 className="color-white">Đăng ký nhận bản tin của chúng tôi</h2>
                                    <p className="mt-10 font-lg color-white">
                                        Những điều mới sẽ luôn được cập nhật thường xuyên
                                    </p>
                                    <div className="box-form-newsletter mt-40">
                                        <form className="form-newsletter">
                                            <input
                                                className="input-newsletter"
                                                type="text"
                                                defaultValue=""
                                                placeholder="Nhập email của bạn tại đây"
                                            />
                                            <button className="btn btn-default font-heading icon-send-letter">
                                                Đăng ký
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
