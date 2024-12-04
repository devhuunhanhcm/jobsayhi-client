import SearchingBar from '@/components/layouts/SearchingBar';
import JobCard from '../components/layouts/JobCard';

function Home() {
    return (
        <>
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
                                <a className="btn btn-brand-1 btn-icon-load hover-up" href="blog-grid.html">
                                    Xem thêm
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
