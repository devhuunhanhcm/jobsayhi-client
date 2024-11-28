import JobAppliesTable from '@/components/layouts/JobAppliesTable';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { JobDto } from './JobList';
import { getJobDetails } from '@/service/JobService';

type Props = {};

const ManagerJobApplies: React.FC<Props> = () => {
    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);
    const [job, setJob] = useState<JobDto | null>(null);

    const jobId = queryParams.get('id') || '';
    const getJob = async () => {
        const res = await getJobDetails(jobId);
        console.log(res);
        setJob(res);
    };
    useEffect(() => {
        getJob();
    }, [jobId]);

    return (
        job &&
        jobId.length > 0 && (
            <div>
                <div>
                    <h5>{job.title}</h5>
                    <hr />
                    <p>
                        <strong>Lương:</strong> {job.salary}
                    </p>
                    <p>
                        <strong>Địa điểm:</strong> {job.location}
                    </p>
                    <p>
                        <strong>Kinh nghiệm:</strong> {job.experience}
                    </p>
                    <p>
                        <strong>Vị trí:</strong> {job.position}
                    </p>
                    <p>
                        <strong>Thời gian làm việc:</strong> {job.workingTime}
                    </p>
                    <p>
                        <strong>Thời hạn:</strong> {new Date(job.deadline).toLocaleString()}
                    </p>
                    <hr />
                    <h6>Mô tả công việc</h6>
                    <p>{job.description}</p>
                    <h6>Yêu cầu công việc</h6>
                    <p>{job.requirements}</p>
                    <h6>Quyền lợi</h6>
                    <p>{job.benefits}</p>
                </div>
                <JobAppliesTable jobId={jobId} />
            </div>
        )
    );
};

export default ManagerJobApplies;
