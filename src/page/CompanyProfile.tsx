import { useAppSelector } from '@/redux/hooks';
import { getCompanyProfile, ICompanyProfileDTO, updateCompanyProfile } from '@/service/CompanyService';
import { updateProfile } from '@/service/ProfileSerivce';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyProfile: React.FC = () => {
    const userId = useAppSelector((state) => state.user.id);
    const navigate = useNavigate();

    const [companyProfile, setCompanyProfile] = useState<ICompanyProfileDTO>({
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
        setCompanyProfile((prev) => ({
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
        console.log(companyProfile);
        if (userId) {
            await updateCompanyProfile(userId, companyProfile);
            await fetchProfile(userId);
        } else {
            navigate('/login');
        }

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
                                    <h3 className="mt-0 mb-15 color-brand-1">Công ty</h3>
                                    <div className="mt-35 mb-40 box-info-profie">
                                        <div className="image-profile">
                                            <img
                                                src={companyProfile.avatarUrl || 'https://placehold.co/500x500'}
                                                alt="company"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="font-sm color-text-mutted mb-10">Url Ảnh đại diện</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="avatarUrl"
                                            value={companyProfile.avatarUrl}
                                            onChange={handleInputChange}
                                        />
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
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">Email *</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={companyProfile.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">Số điện thoại</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="phone"
                                                    value={companyProfile.phone}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">
                                                    Địa chỉ công ty
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="address"
                                                    value={companyProfile.address}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-sm color-text-mutted mb-10">Nhân viên</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="noEmployees"
                                                    value={companyProfile.noEmployees}
                                                    onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
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
                                                    Lưu tất cả thay đổi
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
