import React, { useEffect, useState } from 'react';
import { Job } from '../components/model/Job';
import { getJobDetails } from '../service/JobService';
import { useParams } from 'react-router-dom';

const JobDetails: React.FC = () => {
    const { jobId } = useParams<{ jobId: string }>();
    const [job, setJob] = useState<Job | null>(null);
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                if (jobId) {
                    const response = await getJobDetails(jobId);
                    setJob(response);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchJobDetails();
    }, [jobId]);

    return (
        <main className="main">
            <section className="section-box mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            {job ? (
                                <div className="box-border-single">
                                    <div className="row mt-10">
                                        <div className="col-lg-8 col-md-12">
                                            <h3>{job?.title}</h3>
                                            <div className="mt-0 mb-15">
                                                <span className="card-briefcase">{job.experience}</span>
                                                <span className="card-time">3 mins ago</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 text-lg-end">
                                            <div
                                                className="btn btn-apply-icon btn-apply btn-apply-big hover-up"
                                                data-bs-toggle="modal"
                                                data-bs-target="#ModalApplyJobForm"
                                            >
                                                Apply now
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-bottom pt-10 pb-10" />
                                    {/* <div className="banner-hero banner-image-single mt-10 mb-20">
                                        <img
                                            src={`${
                                                import.meta.env.VITE_PUBLIC_URL
                                            }assets/imgs/page/job-single-2/img.png`}
                                            alt="jobBox"
                                        />
                                    </div> */}
                                    <div className="job-overview">
                                        <h5 className="border-bottom pb-15 mb-30">Overview</h5>
                                        <div className="row">
                                            <div className="col-md-6 d-flex">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/page/job-single/industry.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description industry-icon mb-10">
                                                        Industry
                                                    </span>
                                                    <strong className="small-heading">
                                                        {' '}
                                                        Mechanical / Auto / Automotive, Civil / Construction
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/page/job-single/job-level.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description joblevel-icon mb-10">
                                                        Job level
                                                    </span>
                                                    <strong className="small-heading">
                                                        {job.position ?? 'Chưa phân loại'}
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-25">
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/page/job-single/salary.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description salary-icon mb-10">Salary</span>
                                                    <strong className="small-heading">{job.salary}</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/page/job-single/experience.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description experience-icon mb-10">
                                                        Experience
                                                    </span>
                                                    <strong className="small-heading">{job.experience}</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-25">
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/page/job-single/job-type.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description jobtype-icon mb-10">
                                                        Job type
                                                    </span>
                                                    <strong className="small-heading">Sofware</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/page/job-single/deadline.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description mb-10">Deadline</span>
                                                    <strong className="small-heading">
                                                        {job.deadline
                                                            ? new Date(job.deadline).toLocaleDateString('en-GB')
                                                            : 'Không có deadline'}
                                                    </strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-25">
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/page/job-single/updated.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description jobtype-icon mb-10">Updated</span>
                                                    <strong className="small-heading">
                                                        {job.lastModifiedAt
                                                            ? new Date(job.lastModifiedAt).toLocaleDateString('en-GB')
                                                            : 'Không có deadline'}
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/page/job-single/location.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description mb-10">Location</span>
                                                    <strong className="small-heading">{job.location}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-single">
                                        <h4>Welcome to {job.company.name}</h4>
                                        <p>{job.company.introduction}</p>

                                        <h4>Mô tả</h4>
                                        <ul>
                                            <li>{job.description}</li>
                                        </ul>
                                        <h4>Yêu cầu</h4>
                                        <ul>
                                            <li>{job.requirements}</li>
                                        </ul>
                                        <h4>Quyền Lợi</h4>
                                        <p>{job.benefits}</p>

                                        {job.workingTime && (
                                            <>
                                                <h4>Thời gian làm việc</h4>
                                                <p>{job.workingTime}</p>
                                            </>
                                        )}
                                        {job.workingLocation && (
                                            <>
                                                <h4>Địa điểm làm việc</h4>
                                                <p>{job.workingLocation}</p>
                                            </>
                                        )}
                                    </div>
                                    <div className="author-single">
                                        <span>{job.company.name}</span>
                                    </div>
                                    <div className="single-apply-jobs">
                                        <div className="row align-items-center">
                                            <div className="col-md-5">
                                                <a className="btn btn-default mr-15" href="#">
                                                    Apply now
                                                </a>
                                                <a className="btn btn-border" href="#">
                                                    Save job
                                                </a>
                                            </div>
                                            <div className="col-md-7 text-lg-end social-share">
                                                <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-10">
                                                    Share this
                                                </h6>
                                                <a className="mr-5 d-inline-block d-middle" href="#">
                                                    <img
                                                        alt="jobBox"
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/template/icons/share-fb.svg`}
                                                    />
                                                </a>
                                                <a className="mr-5 d-inline-block d-middle" href="#">
                                                    <img
                                                        alt="jobBox"
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/template/icons/share-tw.svg`}
                                                    />
                                                </a>
                                                <a className="mr-5 d-inline-block d-middle" href="#">
                                                    <img
                                                        alt="jobBox"
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/template/icons/share-red.svg`}
                                                    />
                                                </a>
                                                <a className="d-inline-block d-middle" href="#">
                                                    <img
                                                        alt="jobBox"
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/template/icons/share-whatsapp.svg`}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>Job hiện không tồn tại.</div>
                            )}
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                            <div className="sidebar-border">
                                <div className="sidebar-heading">
                                    <div className="avatar-sidebar">
                                        <figure>
                                            <img alt="jobBox" src={job?.company.avatarUrl} />
                                        </figure>
                                        <div className="sidebar-info">
                                            <span className="sidebar-company">{job?.company.name}</span>
                                            <span className="card-location">{job?.company.address}</span>
                                            <a className="link-underline mt-15" href="#">
                                                01 Open Jobs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-list-job">
                                    <div className="box-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3150609575905!2d-87.6235655!3d41.886080899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1658551322537!5m2!1svi!2s"
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                    <ul className="ul-disc">
                                        <li>{job?.company.address}</li>
                                        <li>Phone: {job?.company.phone}</li>
                                        <li>
                                            Email:
                                            <a href={`mailto:${job?.company.email}`} className="__cf_email__">
                                                {job?.company.email}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-border">
                                <h6 className="f-18">Similar jobs</h6>
                                <div className="sidebar-list-job">
                                    <ul>
                                        <li>
                                            <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                <div className="image">
                                                    <a href="job-details.html">
                                                        <img
                                                            src={`${
                                                                import.meta.env.VITE_PUBLIC_URL
                                                            }assets/imgs/brands/brand-1.png`}
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-text">
                                                    <h5 className="font-md font-bold color-brand-1">
                                                        <a href="job-details.html">UI / UX Designer fulltime</a>
                                                    </h5>
                                                    <div className="mt-0">
                                                        <span className="card-briefcase">Fulltime</span>
                                                        <span className="card-time">
                                                            <span>3</span>
                                                            <span> mins ago</span>
                                                        </span>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <h6 className="card-price">
                                                                    $250<span>/Hour</span>
                                                                </h6>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <span className="card-briefcase">New York, US</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                <div className="image">
                                                    <a href="job-details.html">
                                                        <img
                                                            src={`${
                                                                import.meta.env.VITE_PUBLIC_URL
                                                            }assets/imgs/brands/brand-2.png`}
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-text">
                                                    <h5 className="font-md font-bold color-brand-1">
                                                        <a href="job-details.html">Java Software Engineer</a>
                                                    </h5>
                                                    <div className="mt-0">
                                                        <span className="card-briefcase">Fulltime</span>
                                                        <span className="card-time">
                                                            <span>5</span>
                                                            <span> mins ago</span>
                                                        </span>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <h6 className="card-price">
                                                                    $500<span>/Hour</span>
                                                                </h6>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <span className="card-briefcase">Tokyo, Japan</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                <div className="image">
                                                    <a href="job-details.html">
                                                        <img
                                                            src={`${
                                                                import.meta.env.VITE_PUBLIC_URL
                                                            }assets/imgs/brands/brand-3.png`}
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-text">
                                                    <h5 className="font-md font-bold color-brand-1">
                                                        <a href="job-details.html">Frontend Developer</a>
                                                    </h5>
                                                    <div className="mt-0">
                                                        <span className="card-briefcase">Fulltime</span>
                                                        <span className="card-time">
                                                            <span>8</span>
                                                            <span> mins ago</span>
                                                        </span>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <h6 className="card-price">
                                                                    $650<span>/Hour</span>
                                                                </h6>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <span className="card-briefcase">Hanoi, Vietnam</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                <div className="image">
                                                    <a href="job-details.html">
                                                        <img
                                                            src={`${
                                                                import.meta.env.VITE_PUBLIC_URL
                                                            }assets/imgs/brands/brand-4.png`}
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-text">
                                                    <h5 className="font-md font-bold color-brand-1">
                                                        <a href="job-details.html">Cloud Engineer</a>
                                                    </h5>
                                                    <div className="mt-0">
                                                        <span className="card-briefcase">Fulltime</span>
                                                        <span className="card-time">
                                                            <span>12</span>
                                                            <span> mins ago</span>
                                                        </span>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <h6 className="card-price">
                                                                    $380<span>/Hour</span>
                                                                </h6>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <span className="card-briefcase">Losangl, Au</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                <div className="image">
                                                    <a href="job-details.html">
                                                        <img
                                                            src={`${
                                                                import.meta.env.VITE_PUBLIC_URL
                                                            }assets/imgs/brands/brand-5.png`}
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-text">
                                                    <h5 className="font-md font-bold color-brand-1">
                                                        <a href="job-details.html">DevOps Engineer</a>
                                                    </h5>
                                                    <div className="mt-0">
                                                        <span className="card-briefcase">Fulltime</span>
                                                        <span className="card-time">
                                                            <span>34</span>
                                                            <span> mins ago</span>
                                                        </span>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <h6 className="card-price">
                                                                    $140<span>/Hour</span>
                                                                </h6>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <span className="card-briefcase">Paris, France</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                <div className="image">
                                                    <a href="job-details.html">
                                                        <img
                                                            src={`${
                                                                import.meta.env.VITE_PUBLIC_URL
                                                            }assets/imgs/brands/brand-6.png`}
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-text">
                                                    <h5 className="font-md font-bold color-brand-1">
                                                        <a href="job-details.html">Figma design UI/UX</a>
                                                    </h5>
                                                    <div className="mt-0">
                                                        <span className="card-briefcase">Fulltime</span>
                                                        <span className="card-time">
                                                            <span>45</span>
                                                            <span> mins ago</span>
                                                        </span>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <h6 className="card-price">
                                                                    $290<span>/Hour</span>
                                                                </h6>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <span className="card-briefcase">New York, US</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                <div className="image">
                                                    <a href="job-details.html">
                                                        <img
                                                            src={`${
                                                                import.meta.env.VITE_PUBLIC_URL
                                                            }assets/imgs/brands/brand-7.png`}
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-text">
                                                    <h5 className="font-md font-bold color-brand-1">
                                                        <a href="job-details.html">Product Manage</a>
                                                    </h5>
                                                    <div className="mt-0">
                                                        <span className="card-briefcase">Fulltime</span>
                                                        <span className="card-time">
                                                            <span>50</span>
                                                            <span> mins ago</span>
                                                        </span>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <h6 className="card-price">
                                                                    $650<span>/Hour</span>
                                                                </h6>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <span className="card-briefcase">New York, US</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                <div className="image">
                                                    <a href="job-details.html">
                                                        <img
                                                            src={`${
                                                                import.meta.env.VITE_PUBLIC_URL
                                                            }assets/imgs/brands/brand-8.png`}
                                                            alt="jobBox"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-text">
                                                    <h5 className="font-md font-bold color-brand-1">
                                                        <a href="job-details.html">UI / UX Designer</a>
                                                    </h5>
                                                    <div className="mt-0">
                                                        <span className="card-briefcase">Fulltime</span>
                                                        <span className="card-time">
                                                            <span>58</span>
                                                            <span> mins ago</span>
                                                        </span>
                                                    </div>
                                                    <div className="mt-5">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <h6 className="card-price">
                                                                    $270<span>/Hour</span>
                                                                </h6>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <span className="card-briefcase">New York, US</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-border">
                                <h6 className="f-18">Tags</h6>
                                <div className="sidebar-list-job">
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        App
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        Digital
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        Marketing
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        Conten Writer
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        Sketch
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        PSD
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        Laravel
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        React JS
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        HTML
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        Finance
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        Manager
                                    </a>
                                    <a className="btn btn-grey-small bg-14 mb-10 mr-5" href="jobs-grid.html">
                                        Business
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-50 mb-50">
                <div className="container">
                    <div className="text-left">
                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Featured Jobs</h2>
                        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                            Get the latest news, updates and tips
                        </p>
                    </div>
                    <div className="mt-50">
                        <div className="box-swiper style-nav-top">
                            <div className="swiper-container swiper-group-4 swiper">
                                <div className="swiper-wrapper pb-10 pt-5">
                                    <div className="swiper-slide">
                                        <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                                            <div className="card-grid-2-image-left">
                                                <span className="flash" />
                                                <div className="image-box">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/brands/brand-6.png`}
                                                        alt="jobBox"
                                                    />
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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                                    architecto eveniet, dolor quo repellendus pariatur.
                                                </p>
                                                <div className="mt-30">
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
                                                        PHP
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
                                                        Android{' '}
                                                    </a>
                                                </div>
                                                <div className="card-2-bottom mt-30">
                                                    <div className="row">
                                                        <div className="col-lg-7 col-7">
                                                            <span className="card-text-price">$800</span>
                                                            <span className="text-muted">/Hour</span>
                                                        </div>
                                                        <div className="col-lg-5 col-5 text-end">
                                                            <a className="btn btn-apply-now" href="job-details.html">
                                                                Apply now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                                            <div className="card-grid-2-image-left">
                                                <span className="flash" />
                                                <div className="image-box">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/brands/brand-4.png`}
                                                        alt="jobBox"
                                                    />
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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                                    architecto eveniet, dolor quo repellendus pariatur.
                                                </p>
                                                <div className="mt-30">
                                                    <a className="btn btn-grey-small mr-5" href="jobs-grid.html">
                                                        Typescript
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="jobs-grid.html">
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
                                                            <a className="btn btn-apply-now" href="job-details.html">
                                                                Apply now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                                            <div className="card-grid-2-image-left">
                                                <span className="flash" />
                                                <div className="image-box">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/brands/brand-8.png`}
                                                        alt="jobBox"
                                                    />
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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                                    architecto eveniet, dolor quo repellendus pariatur.
                                                </p>
                                                <div className="mt-30">
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
                                                        iOS
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
                                                        Laravel
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
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
                                                            <a className="btn btn-apply-now" href="job-details.html">
                                                                Apply now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                                            <div className="card-grid-2-image-left">
                                                <span className="flash" />
                                                <div className="image-box">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/brands/brand-4.png`}
                                                        alt="jobBox"
                                                    />
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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                                    architecto eveniet, dolor quo repellendus pariatur.
                                                </p>
                                                <div className="mt-30">
                                                    <a className="btn btn-grey-small mr-5" href="jobs-grid.html">
                                                        Typescript
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="jobs-grid.html">
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
                                                            <a className="btn btn-apply-now" href="job-details.html">
                                                                Apply now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-next swiper-button-next-4" />
                            <div className="swiper-button-prev swiper-button-prev-4" />
                        </div>
                        <div className="text-center">
                            <a className="btn btn-grey" href="#">
                                Load more posts
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-50 mb-50">
                <div className="container">
                    <div className="text-left">
                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Featured Jobs</h2>
                        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                            Get the latest news, updates and tips
                        </p>
                    </div>
                    <div className="mt-50">
                        <div className="box-swiper style-nav-top">
                            <div className="swiper-container swiper-group-4 swiper">
                                <div className="swiper-wrapper pb-10 pt-5">
                                    <div className="swiper-slide">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <span className="flash" />
                                                <div className="image-box">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/brands/brand-6.png`}
                                                        alt="jobBox"
                                                    />
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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                                    architecto eveniet, dolor quo repellendus pariatur.
                                                </p>
                                                <div className="mt-30">
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
                                                        PHP
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
                                                        Android{' '}
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
                                    <div className="swiper-slide">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <span className="flash" />
                                                <div className="image-box">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/brands/brand-4.png`}
                                                        alt="jobBox"
                                                    />
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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                                    architecto eveniet, dolor quo repellendus pariatur.
                                                </p>
                                                <div className="mt-30">
                                                    <a className="btn btn-grey-small mr-5" href="jobs-grid.html">
                                                        Typescript
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="jobs-grid.html">
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
                                    <div className="swiper-slide">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <span className="flash" />
                                                <div className="image-box">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/brands/brand-8.png`}
                                                        alt="jobBox"
                                                    />
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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                                    architecto eveniet, dolor quo repellendus pariatur.
                                                </p>
                                                <div className="mt-30">
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
                                                        iOS
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
                                                        Laravel
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="job-details.html">
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
                                    <div className="swiper-slide">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <span className="flash" />
                                                <div className="image-box">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }assets/imgs/brands/brand-4.png`}
                                                        alt="jobBox"
                                                    />
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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                                    architecto eveniet, dolor quo repellendus pariatur.
                                                </p>
                                                <div className="mt-30">
                                                    <a className="btn btn-grey-small mr-5" href="jobs-grid.html">
                                                        Typescript
                                                    </a>
                                                    <a className="btn btn-grey-small mr-5" href="jobs-grid.html">
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
                                </div>
                            </div>
                            <div className="swiper-button-next swiper-button-next-4" />
                            <div className="swiper-button-prev swiper-button-prev-4" />
                        </div>
                        <div className="text-center">
                            <a className="btn btn-grey" href="#">
                                Load more posts
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default JobDetails;
