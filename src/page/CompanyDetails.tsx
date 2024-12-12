import { Company } from '@/components/model/Company';
import { getCompanyDetails } from '@/service/CompanyService';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface CompanyDetailsProps {}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({}) => {
    const { companyId } = useParams<{ companyId: string }>();
    const [company, setCompany] = useState<Company | null>(null);

    const fetchCompany = async (companyId: string) => {
        try {
            const res = await getCompanyDetails(companyId);
            setCompany(res);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (companyId) {
            fetchCompany(companyId);
        }
    }, [companyId]);

    return (
        <>
            {company && (
                <>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="box-company-profile">
                                <div className="image-compay">
                                    <img
                                        src={
                                            company?.avatarUrl && company.avatarUrl.length > 0
                                                ? company.avatarUrl
                                                : `${
                                                      import.meta.env.VITE_PUBLIC_URL
                                                  }/assets/imgs/avatar/default-logo-company.svg`
                                        }
                                        alt="jobBox"
                                    />
                                </div>
                                <div className="row mt-10">
                                    <div className="col-lg-8 col-md-12">
                                        <h5 className="f-18">
                                            {company.name}
                                            <span className="card-location font-regular mt-10">{company.address}</span>
                                        </h5>
                                    </div>
                                    <div className="col-lg-4 col-md-12 text-lg-end">
                                        <a
                                            className="btn btn-call-icon btn-apply btn-apply-big"
                                            href={`tel:${company.phone}`}
                                        >
                                            Liên hệ ngay
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom pt-10 pb-10" />
                        </div>
                    </section>
                    <section className="section-box mt-20">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="content-single">
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="tab-about">
                                                <h4>Welcome {company.name}</h4>
                                                <p>{company.introduction}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                    <div className="sidebar-border">
                                        <div className="sidebar-heading">
                                            <div className="avatar-sidebar">
                                                <div className="sidebar-info pl-0">
                                                    <span className="sidebar-company mb-10">{company.name}</span>
                                                    <span className="card-location">{company.address}</span>
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
                                        </div>
                                        <div className="sidebar-list-job">
                                            <ul className="ul-disc">
                                                <li>{company.address}</li>
                                                <li>Phone: {company.phone}</li>
                                                <li>Email: {company.email}</li>
                                            </ul>
                                            <div className="mt-30">
                                                <a className="btn btn-send-message" href={`mailto:${company.email}`}>
                                                    Send Message
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default CompanyDetails;
