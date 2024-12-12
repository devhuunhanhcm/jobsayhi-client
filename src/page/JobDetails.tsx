import React, { useEffect, useState } from 'react';
import { Job, JobReview } from '../components/model/Job';
import { getJobDetails, getRelateJobs } from '../service/JobService';
import { useNavigate, useParams } from 'react-router-dom';
import { formatTime } from '@/components/time/time';
import { Form, Modal } from 'react-bootstrap';
import { FileInfo } from './MyCV';
import UploadFileService from '@/service/UploadFileService';
import axiosInstance from '@/api/AxiosInstance';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import toast from 'react-hot-toast';
interface ApplyJob {
    message: string;
    userFileId: string;
}
const JobDetails: React.FC = () => {
    const { jobId } = useParams<{ jobId: string }>();
    const [job, setJob] = useState<Job | null>(null);
    const [applyJob, setApplyJob] = useState<ApplyJob>({ message: '', userFileId: '' });
    const [showApply, setShowApply] = useState(false);
    const [fileInfos, setFileInfos] = useState<FileInfo[]>([]);
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.user.id);
    const navigate = useNavigate();
    const [relateJobs, setRelateJob] = useState<Job[]>([]);

    useEffect(() => {
        loadFiles();
    }, []);

    const fetchRelateJob = async (jobId: string) => {
        try {
            const res = await getRelateJobs(jobId);
            console.log(res);
            setRelateJob(res);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                if (jobId) {
                    const response = await getJobDetails(jobId);
                    setJob(response);
                    fetchRelateJob(jobId);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchJobDetails();
    }, [jobId]);

    const handleChooseCV = (userFileId: string) => {
        setApplyJob((prev) => ({ ...prev, userFileId }));
    };
    const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setApplyJob((prev) => ({ ...prev, message: e.target.value }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            dispatch(loading());
            const response = await axiosInstance.post(`${import.meta.env.VITE_API_URL}/apply/${job?.id}`, applyJob);
            dispatch(unLoading());
            toast.success('Gửi CV Thành công! Hãy chờ đợi thông báo từ nhà tuyển dụng nhé!');
            setShowApply(false);
        } catch (error) {
            dispatch(unLoading());
            toast.error('Gửi CV thất bại hãy thử lại sau!');
        }
    };
    const loadFiles = async () => {
        try {
            const response = await UploadFileService.getFiles();
            if (!response.data.hasErrors) {
                setFileInfos(response.data.content);

                setApplyJob((prev) => ({
                    ...prev,
                    userFileId: response.data.content.length > 0 ? response.data.content[0]?.id : '',
                }));
            }
        } catch (error) {
            console.error('Error loading files:', error);
        }
    };

    const handleSaveJob = async () => {
        if (!userId) return navigate('/login');
        dispatch(loading());
        try {
            const response = await axiosInstance.post(
                `${import.meta.env.VITE_API_URL}/users/favorites/${jobId}`,
                null,
                {
                    params: { userId },
                },
            );
            toast.success('Lưu công việc thành công!');
            console.log('Job saved successfully:', response.data);
        } catch (error) {
            toast.error('Lưu công việc thất bại!');
            console.error('Error saving job:', error);
        }
        dispatch(unLoading());
    };

    return (
        <>
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
                                                <span className="card-time">{formatTime(new Date(job.createAt))}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 text-lg-end">
                                            <div
                                                className="btn btn-apply-icon btn-apply btn-apply-big hover-up"
                                                onClick={() => setShowApply(true)}
                                            >
                                                Ứng tuyển ngay
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-bottom pt-10 pb-10" />
                                    {/* <div className="banner-hero banner-image-single mt-10 mb-20">
                                        <img
                                            src={`${
                                                import.meta.env.VITE_PUBLIC_URL
                                            }/assets/imgs/page/job-single-2/img.png`}
                                            alt="jobBox"
                                        />
                                    </div> */}
                                    <div className="job-overview">
                                        <h5 className="border-bottom pb-15 mb-30">Tổng quan</h5>
                                        <div className="row">
                                            <div className="col-md-6 d-flex">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }/assets/imgs/page/job-single/industry.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description industry-icon mb-10">
                                                        Địa điểm làm việc
                                                    </span>
                                                    <strong className="small-heading">{job.workingLocation}</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }/assets/imgs/page/job-single/job-level.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description joblevel-icon mb-10">Vị trí</span>
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
                                                        }/assets/imgs/page/job-single/salary.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description salary-icon mb-10">Lương</span>
                                                    <strong className="small-heading">{job.salary}</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }/assets/imgs/page/job-single/experience.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description experience-icon mb-10">
                                                        Kinh nghiệm
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
                                                        }/assets/imgs/page/job-single/job-type.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description jobtype-icon mb-10">
                                                        Giờ làm việc
                                                    </span>
                                                    <strong className="small-heading">{job.workingTime}</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex mt-sm-15">
                                                <div className="sidebar-icon-item">
                                                    <img
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }/assets/imgs/page/job-single/deadline.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description mb-10">Hạn nộp</span>
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
                                                        }/assets/imgs/page/job-single/updated.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description jobtype-icon mb-10">
                                                        Chỉnh sửa lần cuối
                                                    </span>
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
                                                        }/assets/imgs/page/job-single/location.svg`}
                                                        alt="jobBox"
                                                    />
                                                </div>
                                                <div className="sidebar-text-info ml-10">
                                                    <span className="text-description mb-10">Địa điểm</span>
                                                    <strong className="small-heading">{job.location}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-single">
                                        <h4>Chào mừng bạn đến với {job.company.name}</h4>
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
                                                <a className="btn btn-default mr-15" onClick={() => setShowApply(true)}>
                                                    Ứng tuyển
                                                </a>
                                                <a className="btn btn-border" href="#" onClick={handleSaveJob}>
                                                    Lưu
                                                </a>
                                            </div>
                                            <div className="col-md-7 text-lg-end social-share">
                                                <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-10">
                                                    Chia sẻ
                                                </h6>
                                                <a className="mr-5 d-inline-block d-middle" href="#">
                                                    <img
                                                        alt="jobBox"
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }/assets/imgs/template/icons/share-fb.svg`}
                                                    />
                                                </a>
                                                <a className="mr-5 d-inline-block d-middle" href="#">
                                                    <img
                                                        alt="jobBox"
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }/assets/imgs/template/icons/share-tw.svg`}
                                                    />
                                                </a>
                                                <a className="mr-5 d-inline-block d-middle" href="#">
                                                    <img
                                                        alt="jobBox"
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }/assets/imgs/template/icons/share-red.svg`}
                                                    />
                                                </a>
                                                <a className="d-inline-block d-middle" href="#">
                                                    <img
                                                        alt="jobBox"
                                                        src={`${
                                                            import.meta.env.VITE_PUBLIC_URL
                                                        }/assets/imgs/template/icons/share-whatsapp.svg`}
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
                                            <img
                                                className="img-rounded company-avatar"
                                                src={
                                                    job?.company?.avatarUrl && job.company.avatarUrl.length > 0
                                                        ? job.company.avatarUrl
                                                        : `${
                                                              import.meta.env.VITE_PUBLIC_URL
                                                          }/assets/imgs/avatar/default-logo-company.svg`
                                                }
                                                alt="jobsayhi"
                                            />
                                        </figure>
                                        <div className="sidebar-info">
                                            <span className="sidebar-company">{job?.company.name}</span>
                                            <span className="card-location">{job?.company.address}</span>
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
                                        <li>SĐT: {job?.company.phone}</li>
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
                                <h6 className="f-18">Công việc tương tự</h6>
                                <div className="sidebar-list-job">
                                    <ul className="relate-job">
                                        {relateJobs?.map((j) => (
                                            <li key={j.id}>
                                                <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                    <div className="image">
                                                        <a href="job-details.html">
                                                            <img
                                                                src={
                                                                    j?.company?.avatarUrl &&
                                                                    j.company.avatarUrl.length > 0
                                                                        ? j.company.avatarUrl
                                                                        : `${
                                                                              import.meta.env.VITE_PUBLIC_URL
                                                                          }/assets/imgs/avatar/default-logo-company.svg`
                                                                }
                                                                alt="jobBox"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="info-text">
                                                        <h5 className="font-md font-bold color-brand-1">
                                                            <a href={`/job-details/${j.id}`}>{j.title}</a>
                                                        </h5>
                                                        <div className="mt-0">
                                                            <span className="card-briefcase">{j.experience}</span>
                                                            <span className="card-time">
                                                                {j.lastModifiedAt
                                                                    ? new Date(j.lastModifiedAt).toLocaleDateString(
                                                                          'en-GB',
                                                                      )
                                                                    : 'Không có deadline'}
                                                            </span>
                                                        </div>
                                                        <div className="mt-5">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <h6 className="card-price">{j.salary}</h6>
                                                                </div>
                                                                <div className="col-6 text-end">
                                                                    <span className="card-briefcase">{j.location}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {job && (
                <Modal show={showApply} onHide={() => setShowApply(false)}>
                    <Modal.Header closeButton className="modal-header">
                        <h6 className="modal-heading">Ứng tuyển</h6>
                        <Modal.Title className="modal-title">{job.title}</Modal.Title>
                        <span className="font-sm text-muted mb-30">Điền một số thông tin dành cho nhà tuyển dụng!</span>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Chọn CV đã tải lên</Form.Label>
                                {fileInfos.length > 0 ? (
                                    <>
                                        {fileInfos.map((file) => (
                                            <div
                                                key={file.id}
                                                className={`choose-cv ${
                                                    applyJob?.userFileId === file.id ? 'active' : ''
                                                }`}
                                                onClick={() => handleChooseCV(file.id)}
                                            >
                                                <p>{file.name}</p>
                                                <button className="choose-cv-btn">Chọn</button>
                                            </div>
                                        ))}
                                        <div className="text-center">
                                            <a href="/upload">Tải lên cv mới!</a>
                                        </div>
                                    </>
                                ) : (
                                    <div>
                                        Bạn chưa tải lên cv nào <a href="/upload">Tải lên ngay!</a>
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Lời nhắn cho nhà tuyển dụng</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => handleChangeMessage(e)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-full" onClick={handleSubmit}>
                            Ứng tuyển ngay
                        </button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default JobDetails;
