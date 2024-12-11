import { Candidate } from '@/service/ProfileSerivce';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

type CandidateCardProps = {
    candidate: Candidate;
};

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
    return (
        <>
            <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                    <div className="card-grid-2-image-rd online">
                        <a href="candidate-details.html">
                            <figure>
                                <img alt="jobBox" src={candidate?.avatarUrl || 'https://placehold.co/100'} />
                            </figure>
                        </a>
                    </div>
                    <div className="card-profile pt-10">
                        <a href="candidate-details.html">
                            <h5>{candidate?.fullName}</h5>
                        </a>
                        <span className="font-xs color-text-mutted">{candidate?.level}</span>
                        <div className="rate-reviews-small pt-5">
                            <CiLocationOn /> {candidate?.location || 'Toàn quốc'}
                        </div>
                    </div>
                </div>
                <div className="card-block-info">
                    <p className="font-xs color-text-paragraph-2">{candidate?.shortDescription}</p>
                    <div className="card-2-bottom card-2-bottom-candidate mt-30">
                        <div className="text-start"></div>
                    </div>
                    <div className="employers-info align-items-center justify-content-center mt-15">
                        <div className="row">
                            <div className="col-6">
                                <span className="d-flex align-items-center">
                                    <i className="fi-rr-marker mr-5 ml-0" />
                                    <span className="font-sm color-text-mutted">{}</span>
                                </span>
                            </div>
                            <div className="col-6">
                                <span className="d-flex justify-content-end align-items-center">
                                    <i className="fi-rr-clock mr-5" />
                                    <span className="font-sm color-brand-1">Thỏa thuận</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CandidateCard;
