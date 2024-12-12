import axiosInstance from '@/api/AxiosInstance';
import JobCardGrid from '@/components/layouts/JobCardGrid';
import { JobReview } from '@/components/model/Job';
import { useAppSelector } from '@/redux/hooks';
import { updateProfile } from '@/service/ProfileSerivce';
import { getProfile } from '@/service/UserService';
import React, { useEffect, useState } from 'react';
export interface UserProfileDto {
    id: string;
    displayName: string;
    phone: string;
    email: string;
    avatar: string;
}

const Profile: React.FC = () => {
    const userInfo = useAppSelector((state) => state.user);
    const [favoriteJobs, setFavoriteJobs] = useState<JobReview[]>([]);
    const userId = useAppSelector((state) => state.user.id);
    const [profileData, setProfileData] = useState<UserProfileDto>({
        id: '',
        displayName: '',
        email: '',
        phone: '',
        avatar: '',
    });

    const fetchFavoriteJobs = async () => {
        try {
            const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/users/favorites`, {
                params: { userId },
            });
            setFavoriteJobs(response.data.content);
        } catch (error) {
            console.error('Failed to fetch favorite jobs', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (userInfo === null) window.location.href = '/login';
        setProfileData((prev) => ({
            ...prev,
            id: userInfo.id,
            displayName: userInfo.displayName,
            email: userInfo.email,
            phone: userInfo.phone,
            avatar: userInfo.avatar,
        }));
        if (userInfo.id) {
            fetchFavoriteJobs();
        }
    }, [userInfo]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await updateProfile(profileData);

            await getProfile();
        } catch (error) {
            console.error('Profile update failed', error);
        }
    };

    return (
        <>
            <section className="section-box mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="box-nav-tabs nav-tavs-profile mb-5">
                                <ul className="nav" role="tablist">
                                    <li>
                                        <a
                                            className="btn btn-border aboutus-icon mb-20 active"
                                            href="#tab-my-profile"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-my-profile"
                                            aria-selected="true"
                                        >
                                            Tài khoản
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="btn btn-border recruitment-icon mb-20"
                                            href="#tab-my-jobs"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-my-jobs"
                                            aria-selected="false"
                                        >
                                            Công việc đã lưu
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
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
                                                <img
                                                    src={
                                                        profileData.avatar ||
                                                        'assets/imgs/page/candidates/candidate-profile.png'
                                                    }
                                                    alt="jobbox"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="font-sm color-text-mutted mb-10"> URL ảnh đại diện</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="avatar"
                                                value={profileData.avatar || ''}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="row form-contact">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <label className="font-sm color-text-mutted mb-10">Username</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={userInfo.username || ''}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-sm color-text-mutted mb-10">Tên</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="displayName"
                                                        value={profileData.displayName || ''}
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-sm color-text-mutted mb-10">Email *</label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={userInfo.email || ''}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-sm color-text-mutted mb-10">
                                                        Số điện thoại
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="phone"
                                                        value={profileData.phone || ''}
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
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
                                    <div
                                        className="tab-pane fade"
                                        id="tab-my-jobs"
                                        role="tabpanel"
                                        aria-labelledby="tab-my-jobs"
                                    >
                                        <h3 className="mt-0 color-brand-1 mb-50">Công việc của tôi</h3>
                                        <div className="row display-list">
                                            {favoriteJobs.length > 0 ? (
                                                favoriteJobs.map((job) => <JobCardGrid key={job.id} job={job} />)
                                            ) : (
                                                <a href="/find" className="color-text-mutted">
                                                    Bạn chưa lưu công việc nào. Tìm kiếm ngay!
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
