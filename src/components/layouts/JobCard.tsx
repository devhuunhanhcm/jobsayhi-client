import { useEffect, useState } from 'react';
import { getLatestJobs } from '../../service/JobService';
import { JobReview } from '../model/Job';

function JobCard() {
    const [jobs, setJobs] = useState<JobReview[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await getLatestJobs();
                console.log(res);

                setJobs(res.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load jobs ' + err);
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return (
        <>
            <div className="row">
                {jobs.map((job, id) => {
                    return (
                        <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-block-info pt-25">
                                    <h6>
                                        <a href={`/job-details/${job.id}`}>{job.title}</a>
                                    </h6>
                                    <div>
                                        <span className="card-briefcase mr-15">{job.location}</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                    <div className="mt-10 card_job_requirements flex-grow-1 mb-10">
                                        {job.requirements}
                                    </div>
                                    <div className="card-2-bottom pt-10 border-top">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="d-flex">
                                                    <img
                                                        className="img-rounded company-avatar"
                                                        src={job.company.avatarUrl}
                                                        alt="jobBox"
                                                    />
                                                    <div className="info-right-img">
                                                        <h6 className="color-brand-1 lh-base company-name">
                                                            {job.company.name}
                                                        </h6>
                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                            {job.company.address}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 text-end">
                                                <span className="card-text-price">{job.salary}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default JobCard;
