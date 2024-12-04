import { JobReview } from '../model/Job';
import { formatTime } from '../time/time';
import SimilarTag from './SimilarTag';

interface IProps {
    job: JobReview;
}
const JobCardGrid: React.FC<IProps> = ({ job }) => {
    return (
        <>
            <div className="col-xl-12 col-12">
                <div className="card-grid-2 hover-up">
                    {job?.similarityScore && (
                        <span className="flash">
                            <SimilarTag percent={job.similarityScore} />
                        </span>
                    )}
                    <div className="row">
                        <div>
                            <div className="card-grid-2-image-left">
                                <div className="image-box">
                                    <img src={job.company.avatarUrl} alt="jobBox" />
                                </div>
                                <div className="right-info">
                                    <a className="name-job" href="">
                                        {job.company.name}
                                    </a>
                                    <span className="location-small">{job.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-block-info">
                        <h4>
                            <a href={`/job-details/${job.id}`}>{job.title}</a>
                        </h4>
                        <div className="mt-5">
                            <span className="card-briefcase">Fulltime</span>
                            <span className="card-time">{formatTime(new Date(job.createAt))}</span>
                        </div>
                        <p className="font-sm color-text-paragraph mt-10">{job.description}</p>
                        <div className="card-2-bottom mt-20">
                            <div className="row">
                                <div className="col-lg-7 col-7">
                                    <span className="card-text-price">{job.salary}</span>
                                </div>
                                <div className="col-lg-5 col-5 text-end">
                                    <div
                                        className="btn btn-apply-now"
                                        data-bs-toggle="modal"
                                        data-bs-target="#ModalApplyJobForm"
                                    >
                                        Ứng tuyển
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobCardGrid;
