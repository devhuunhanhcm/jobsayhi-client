import JobCardGrid from '@/components/layouts/JobCardGrid';
import SearchingBar from '@/components/layouts/SearchingBar';
import { JobReview } from '@/components/model/Job';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';

interface JobsProps {}
const FindJob: React.FC<JobsProps> = () => {
    const [searchResults, setSearchResults] = useState<JobReview[]>([]);

    return (
        <>
            <SearchingBar setSearchResults={setSearchResults} />
            <section className="section-box mt-30">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                            <div className="content-page">
                                <div className="box-filters-job">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-5">
                                            <span className="text-small text-showing">
                                                Hiển thị <strong>41-60 </strong>trên <strong>944 </strong>việc làm
                                            </span>
                                        </div>
                                        <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                            <div className="display-flex2">
                                                <div className="box-border mr-10">
                                                    <span className="text-sortby">Hiển thị:</span>
                                                    <div className="dropdown dropdown-sort">
                                                        <button
                                                            className="btn dropdown-toggle"
                                                            id="dropdownSort"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                            data-bs-display="static"
                                                        >
                                                            <span>12</span>
                                                            <i className="fi-rr-angle-small-down" />
                                                        </button>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-light"
                                                            aria-labelledby="dropdownSort"
                                                        >
                                                            <li>
                                                                <a className="dropdown-item active" href="#">
                                                                    10
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    12
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    20
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="box-border">
                                                    <span className="text-sortby">Sắp xếp:</span>
                                                    <div className="dropdown dropdown-sort">
                                                        <button
                                                            className="btn dropdown-toggle"
                                                            id="dropdownSort2"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                            data-bs-display="static"
                                                        >
                                                            <span>Mới nhất</span>
                                                            <i className="fi-rr-angle-small-down" />
                                                        </button>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-light"
                                                            aria-labelledby="dropdownSort2"
                                                        >
                                                            <li>
                                                                <a className="dropdown-item active" href="#">
                                                                    Mới nhất
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    Cũ nhất
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="box-view-type">
                                                    <a className="view-type" href="jobs-list.html">
                                                        <img
                                                            src="assets/imgs/template/icons/icon-list.svg"
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                    <a className="view-type" href="jobs-grid.html">
                                                        <img
                                                            src="assets/imgs/template/icons/icon-grid-hover.svg"
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row display-list">
                                    {searchResults.length > 0 ? (
                                        searchResults.map((job) => {
                                            return <JobCardGrid key={job.id} job={job} />;
                                        })
                                    ) : (
                                        <strong>Chưa tìm thấy công việc nào.</strong>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="sidebar-shadow none-shadow mb-30">
                                <div className="sidebar-filters">
                                    <div className="filter-block head-border mb-30">
                                        <h5>
                                            Bộ lọc nâng cao
                                            <a className="link-reset" href="#">
                                                Khôi phục
                                            </a>
                                        </h5>
                                    </div>
                                    <div className="filter-block mb-30">
                                        <div className="form-group select-style select-style-icon">
                                            <select className="form-control form-icons select-active">
                                                <option>New York, US</option>
                                            </select>
                                            <i className="fi-rr-marker" />
                                        </div>
                                    </div>
                                    <div className="filter-block mb-20">
                                        <h5 className="medium-heading mb-15">Danh mục</h5>
                                        <div className="form-group">
                                            <ul className="list-checkbox">
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Tất cả</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">180</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Software</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">12</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="filter-block mb-20">
                                        <h5 className="medium-heading mb-25">Lương</h5>
                                        <div className="list-checkbox pb-20">
                                            <div className="row position-relative mt-10 mb-20">
                                                <div className="col-sm-12 box-slider-range">
                                                    <div id="slider-range" />
                                                </div>
                                                <div className="box-input-money">
                                                    <input
                                                        className="input-disabled form-control min-value-money"
                                                        type="text"
                                                        name="min-value-money"
                                                        disabled={true}
                                                        defaultValue=""
                                                    />
                                                    <input
                                                        className="form-control min-value"
                                                        type="hidden"
                                                        name="min-value"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="box-number-money">
                                                <div className="row mt-30">
                                                    <div className="col-sm-6 col-6">
                                                        <span className="font-sm color-brand-1">$0</span>
                                                    </div>
                                                    <div className="col-sm-6 col-6 text-end">
                                                        <span className="font-sm color-brand-1">$500</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-20">
                                            <ul className="list-checkbox">
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">All</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">145</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">$0k - $20k</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">56</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="filter-block mb-30">
                                        <h5 className="medium-heading mb-10">Vị trí</h5>
                                        <div className="form-group">
                                            <ul className="list-checkbox">
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Senior</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">12</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Junior</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">35</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Fresher</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">56</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="filter-block mb-30">
                                        <h5 className="medium-heading mb-10">Kinh nghiệm</h5>
                                        <div className="form-group">
                                            <ul className="list-checkbox">
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Thực tập sinh</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">56</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Entry Level</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">87</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Associate</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">24</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Mid Level</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">45</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="filter-block mb-20">
                                        <h5 className="medium-heading mb-15">Loại công việc</h5>
                                        <div className="form-group">
                                            <ul className="list-checkbox">
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Toàn thời gian</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">25</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Bán thời gian</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">64</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Remote</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">78</span>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" />
                                                        <span className="text-small">Freelancer</span>
                                                        <span className="checkmark" />
                                                    </label>
                                                    <span className="number-item">97</span>
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

export default FindJob;
