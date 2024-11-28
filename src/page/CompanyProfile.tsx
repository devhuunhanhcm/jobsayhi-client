import { useAppSelector } from '@/redux/hooks';
import { getCompanyProfile } from '@/service/CompanyService';
import { updateProfile } from '@/service/ProfileSerivce';
import React, { useEffect, useState } from 'react';
interface CompanyProfile {
    name: string;
    avatarUrl: string;
    address: string;
    email: string;
    noEmployees: string;
    introduction: string;
    establishDate: string;
    phone: string;
    isVerified: boolean;
}
const CompanyProfile: React.FC = () => {
    const userId = useAppSelector((state) => state.user.id);

    const [companyProfile, setCompanyProfile] = useState<CompanyProfile>({
        name: '',
        avatarUrl: '',
        address: '',
        email: '',
        noEmployees: '',
        introduction: '',
        establishDate: '',
        phone: '',
        isVerified: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        useAppSelector((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const fetchProfile = async (userId: string) => {
        const res = await getCompanyProfile(userId);
        console.log(res);

        setCompanyProfile(res);
    };

    useEffect(() => {
        if (userId) fetchProfile(userId);
    }, [userId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
        } catch (error) {
            console.error('Profile update failed', error);
        }
    };

    return (
        <>
            {userId.length > 0 && (
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="content-single">
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="tab-my-profile"
                                    role="tabpanel"
                                    aria-labelledby="tab-my-profile"
                                >
                                    <h3 className="mt-0 mb-15 color-brand-1">Tài khoản</h3>
                                    <div className="mt-35 mb-40 box-info-profie">
                                        <div className="image-profile">
                                            <img src="https://placehold.co/500x500" alt="company" />
                                        </div>
                                        <a className="btn btn-apply">Tải lên avatar</a>
                                        <a className="btn btn-link">Xóa</a>
                                    </div>
                                    <div className="row form-contact">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">Tên công ty</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    value={companyProfile.name}
                                                    onChange={(e) => handleInputChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">Email *</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={companyProfile.email}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">Số điện thoại</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="phone"
                                                    value={companyProfile.phone}
                                                    onChange={(e) => handleInputChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">Nhân viên</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="noEmployees"
                                                    value={companyProfile.noEmployees}
                                                    onChange={(e) => handleInputChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">
                                                    Giới thiệu về công ty
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="introduction"
                                                    value={companyProfile.introduction}
                                                    onChange={(e) => handleInputChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">Xác thực: </label>
                                                <span>
                                                    {companyProfile.isVerified ? 'Đã xác thực' : 'Chưa xác thực'}
                                                </span>
                                            </div>

                                            <div className="border-bottom pt-10 pb-10 mb-30" />

                                            <div className="box-button mt-15">
                                                <button
                                                    className="btn btn-apply-big font-md font-bold"
                                                    onClick={handleSubmit}
                                                >
                                                    Save All Changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default CompanyProfile;
