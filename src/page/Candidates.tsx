import CandidateCard from '@/components/layouts/CandidateCard';
import { Candidate, getCandidates } from '@/service/ProfileSerivce';
import React, { useEffect, useState } from 'react';

interface CandidatesProps {}

const Candidates: React.FC<CandidatesProps> = ({}) => {
    const [candidatesList, setCandidates] = useState<Candidate[]>([]);
    const fetchCandidates = async () => {
        const res = await getCandidates();
        if (res !== null) setCandidates(res);
    };

    useEffect(() => {
        fetchCandidates();
    }, []);
    return (
        <>
            <section className="section-box mt-30">
                <div className="container">
                    <div className="content-page">
                        <div className="row">
                            {candidatesList?.map((c) => (
                                <div key={c.id} className="col-xl-3 col-lg-4 col-md-6">
                                    <CandidateCard candidate={c} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Candidates;
