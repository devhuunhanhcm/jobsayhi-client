import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import Pagination from 'rc-pagination';
import TextBanner from '@/components/layouts/TextBanner';
import { itemRender } from './FindJob';

export interface CompanyDto {
    id: string;
    name: string;
    phone: string;
    email: string;
    avatarUrl: string;
    address: string;
    noEmployees: string;
    introduction: null;
    establishDate: string;
    countJobs: number;
    verified: boolean;
}

interface ApiResponse {
    hasErrors: boolean;
    content: CompanyDto[];
    errors: string;
    status: number;
    timestamp: string;
}
type SearchResult = {
    data: CompanyDto[];
    total: number;
    page: number;
    limit: number;
    orderBy: string;
};

const Company: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [companies, setCompanies] = useState<SearchResult>({
        data: [],
        total: 0,
        page: currentPage,
        limit: 10,
        orderBy: 'establishDate:desc',
    });
    const userId = useAppSelector((state) => state.user.id);
    const [statusFilter, setStatusFilter] = useState<boolean | null>(false);

    const dispatch = useAppDispatch();
    const [sortConfig, setSortConfig] = useState<{ key: keyof CompanyDto; direction: 'asc' | 'desc' }>({
        key: 'establishDate',
        direction: 'desc',
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setCompanies((prev) => ({
            ...prev,
            page: page,
            limit: pageSize,
        }));
    };

    useEffect(() => {
        if (userId) {
            const delayDebounceFn = setTimeout(() => {
                fetchCompany();
            }, 300);
            return () => clearTimeout(delayDebounceFn);
        }
    }, [userId, currentPage, searchTerm, statusFilter, companies.orderBy]);

    const fetchCompany = async () => {
        try {
            dispatch(loading());
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/company/findAll`, {
                params: {
                    limit: companies.limit,
                    page: companies.page,
                    orderBy: companies.orderBy,
                    search: searchTerm,
                },
            });
            const data = response.data.content;
            setCompanies((prev) => ({
                ...prev,
                data: data.data,
                limit: data.limit,
                total: data.total,
                orderBy: companies.orderBy,
            }));
            dispatch(unLoading());
        } catch (err) {
            dispatch(unLoading());
        }
    };

    const handleSortEstablishDate = () => {
        setCompanies((prev) => ({
            ...prev,
            orderBy: prev.orderBy === 'establishDate:desc' ? 'establishDate:asc' : 'establishDate:desc',
        }));
    };

    const handleSort = (key: keyof CompanyDto) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    return (
        <main className="main">
            <TextBanner
                title="Các công ty"
                desc="Tất cả các công ty nổi bật nhất Jobsayhi"
                subDesc="Tìm công ty của bạn ngay!"
                bgImage="/assets/imgs/banner/banner.jpg"
            />
            <section className="section-box mt-30">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col col-md-12 col-sm-12 col-12 float-right">
                            <div className="content-page">
                                <div className="row">
                                    {companies.data.length > 0
                                        ? companies.data.map((c, i) => (
                                              <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                  <div className="company-card card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                      <div className="image-box">
                                                          <a href={`/company-details/${c.id}`}>
                                                              <img src={c.avatarUrl} alt="jobBox" />
                                                          </a>
                                                      </div>
                                                      <div className="info-text mt-10">
                                                          <h5 className="font-bold">
                                                              <a href={`/company-details/${c.id}`}>{c.name}</a>
                                                          </h5>
                                                          <div className="mt-5">
                                                              <img
                                                                  alt="jobBox"
                                                                  src="assets/imgs/template/icons/star.svg"
                                                              />
                                                              <img
                                                                  alt="jobBox"
                                                                  src="assets/imgs/template/icons/star.svg"
                                                              />
                                                              <img
                                                                  alt="jobBox"
                                                                  src="assets/imgs/template/icons/star.svg"
                                                              />
                                                              <img
                                                                  alt="jobBox"
                                                                  src="assets/imgs/template/icons/star.svg"
                                                              />
                                                              <img
                                                                  alt="jobBox"
                                                                  src="assets/imgs/template/icons/star.svg"
                                                              />
                                                              <span className="font-xs color-text-mutted ml-10">
                                                                  <span>(</span>
                                                                  <span>66</span>
                                                                  <span>)</span>
                                                              </span>
                                                          </div>
                                                          <span className="card-location">{c.address}</span>
                                                          <div className="mt-30">
                                                              <a
                                                                  className="btn btn-grey-big"
                                                                  href={`/company-details/${c.id}`}
                                                              >
                                                                  <span>{c.countJobs}</span>
                                                                  <span> Công việc</span>
                                                              </a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          ))
                                        : 'Hiện tại chưa có công ty nào.'}
                                </div>
                                <div className="d-flex justify-content-center mt-4">
                                    <Pagination
                                        current={currentPage}
                                        total={companies.total}
                                        pageSize={companies.limit}
                                        onChange={handlePageChange}
                                        showSizeChanger
                                        itemRender={itemRender}
                                        showTotal={(total, range) =>
                                            `Hiển thị ${range[0]}-${range[1]} trên ${total} công ty`
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Company;
