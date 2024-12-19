import JobCardGrid from '@/components/layouts/JobCardGrid';
import { JobReview, POSITIONS } from '@/components/model/Job';
import axios from 'axios';
import Select from 'react-select';
import { IoLocationOutline } from 'react-icons/io5';
import { BiCategory } from 'react-icons/bi';
import Pagination from 'rc-pagination';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useAppDispatch } from '@/redux/hooks';
import { loading, unLoading } from '@/redux/Slice/LoadingSlice';
import { useLocation } from 'react-router-dom';

interface Category {
    id: string;
    name: string;
    description: string;
}

interface CategoryResponse {
    hasErrors: boolean;
    content: Category[];
    errors: string;
    status: number;
    timestamp: string;
}

interface LocationData {
    Id: string;
    Name: string;
    Cities: Array<{
        Id: string;
        Name: string;
    }>;
}

interface SearchFormData {
    keyword: string;
    location: SelectOption | null;
    categoryName: SelectOption | null;
    position: SelectOption | null;
    experience: string | null;
}

interface SelectOption {
    value: string;
    label: string;
}

export interface SearchResult {
    data: JobReview[];
    total: number;
    page: number;
    limit: number;
}
export const itemRender = (_current: number, type: string, element: React.ReactNode) => {
    if (type === 'prev') {
        return (
            <button className="rc-pagination-item-link">
                <FiChevronLeft size={18} />
            </button>
        );
    }
    if (type === 'next') {
        return (
            <button className="rc-pagination-item-link">
                <FiChevronRight size={18} />
            </button>
        );
    }
    return element;
};
export const customStyles = {
    control: (provided: any) => ({
        ...provided,
        minHeight: '48px',
        borderRadius: '6px',
        boxShadow: 'none',
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#6c757d',
    }),
    option: (provided: any, state: { isSelected: boolean }) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#f05123' : 'white',
        '&:hover': {
            backgroundColor: state.isSelected ? '#f05123' : '#f2f4f8',
        },
    }),
};

const FindJob: React.FC = () => {
    const topRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const [categories, setCategories] = useState<Category[]>([]);
    const [locations, setLocations] = useState<LocationData[]>([]);

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const keyword = queryParams.get('keyword') || '';
    const city = queryParams.get('city') || '';
    const category = queryParams.get('category') || '';

    const [formData, setFormData] = useState<SearchFormData>({
        keyword: keyword,
        location: city.length > 0 ? { label: city, value: city } : null,
        categoryName: category.length > 0 ? { label: category, value: category } : null,
        position: null,
        experience: null,
    });
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchResults, setSearchResults] = useState<SearchResult>({
        data: [],
        total: 0,
        page: currentPage,
        limit: 5,
    });
    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setSearchResults((prev) => ({
            ...prev,
            page: page,
            limit: pageSize,
        }));
    };

    const categoryOptions: SelectOption[] = categories.map((category) => ({
        value: category.name,
        label: category.name,
    }));

    const locationOptions: SelectOption[] = locations.map((location) => ({
        value: location.Name,
        label: location.Name,
    }));

    // Fetch categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get<CategoryResponse>(`${import.meta.env.VITE_API_URL}/category`);
                setCategories(response.data.content);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    // Fetch locations
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
                );
                setLocations(response.data);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };
        fetchLocations();
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearch();
        }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [currentPage, formData]);

    const handleSearch = async (e?: React.FormEvent) => {
        e?.preventDefault();

        const normalizedLocation = formData.location?.value
            ?.replace(/^Thành phố\s*/i, '')
            ?.replace(/^Tỉnh\s*/i, '')
            ?.trim();

        try {
            dispatch(loading());
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/job/search?keyword=${formData.keyword}&limit=${
                    searchResults.limit
                }&page=${searchResults.page}&order-by=createAt`,
                {
                    location: normalizedLocation || '',
                    experience: formData.experience || '',
                    categoryName: formData.categoryName?.value || '',
                    skills: [],
                    position: formData.position?.value || null,
                },
            );
            topRef.current?.scrollIntoView({ behavior: 'smooth' });
            dispatch(unLoading());
            setSearchResults({
                data: response.data.content.data,
                total: response.data.content.total,
                page: response.data.content.page,
                limit: response.data.content.limit,
            });
        } catch (error) {
            console.error('Error performing search:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            keyword: e.target.value,
        }));
    };

    return (
        <>
            <div ref={topRef}></div>
            <section className="section-box">
                <div className="banner-hero hero-2">
                    <div className="banner-inner">
                        <div className="block-banner">
                            <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">
                                Tìm việc ngay!
                            </h1>

                            <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <form onSubmit={handleSearch}>
                                    <div className="box-industry" style={{ minWidth: '200px' }}>
                                        <Select
                                            value={formData.categoryName}
                                            onChange={(option) =>
                                                setFormData((prev) => ({ ...prev, categoryName: option }))
                                            }
                                            options={categoryOptions}
                                            placeholder="Danh mục"
                                            isClearable
                                            styles={customStyles}
                                            className="mr-10"
                                            components={{
                                                IndicatorSeparator: () => <BiCategory />,
                                            }}
                                        />
                                    </div>

                                    <div style={{ minWidth: '200px' }}>
                                        <Select
                                            value={formData.location}
                                            onChange={(option) =>
                                                setFormData((prev) => ({ ...prev, location: option }))
                                            }
                                            options={locationOptions}
                                            placeholder="Địa điểm"
                                            isClearable
                                            styles={customStyles}
                                            className="mr-10"
                                            components={{
                                                IndicatorSeparator: () => <IoLocationOutline />,
                                            }}
                                        />
                                    </div>

                                    <input
                                        name="keyword"
                                        value={formData.keyword}
                                        onChange={handleInputChange}
                                        className="form-input input-keysearch mr-10"
                                        type="text"
                                        placeholder="Tìm kiếm công việc... "
                                    />

                                    <button className="btn btn-default btn-find font-sm" type="submit">
                                        Tìm kiếm
                                    </button>
                                </form>
                            </div>

                            <div
                                className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <strong>Từ khóa phổ biến:</strong>
                                <a href="#">Designer</a>, <a href="#">Web</a>, <a href="#">IOS</a>,{' '}
                                <a href="#">Developer</a>, <a href="#">PHP</a>, <a href="#">Senior</a>,{' '}
                                <a href="#">Engineer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-30">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                            <div className="content-page">
                                <div className="row display-list">
                                    {searchResults.data.length > 0 ? (
                                        <>
                                            {searchResults.data.map((job) => (
                                                <JobCardGrid key={job.id} job={job} />
                                            ))}
                                            <div className="d-flex justify-content-center mt-4">
                                                <Pagination
                                                    current={searchResults.page}
                                                    total={searchResults.total}
                                                    pageSize={searchResults.limit}
                                                    onChange={handlePageChange}
                                                    itemRender={itemRender}
                                                    showTotal={(total, range) =>
                                                        `Hiển thị ${range[0]}-${range[1]} trên ${total} việc làm`
                                                    }
                                                    showSizeChanger
                                                    showPrevNextJumpers={false}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <strong>Chưa tìm thấy công việc nào.</strong>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* filter */}
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="sidebar-shadow none-shadow mb-30">
                                <div className="sidebar-filters">
                                    <div className="filter-block head-border mb-30">
                                        <h5>Bộ lọc nâng cao</h5>
                                    </div>
                                    <div className="filter-block mb-30">
                                        <h5 className="medium-heading mb-10">Thành phố</h5>
                                        <div className="form-group">
                                            <Select
                                                value={formData.location}
                                                onChange={(option) =>
                                                    setFormData((prev) => ({ ...prev, location: option }))
                                                }
                                                options={locationOptions}
                                                placeholder="Địa điểm"
                                                isClearable
                                                styles={customStyles}
                                                className="mr-10"
                                                components={{
                                                    IndicatorSeparator: () => <IoLocationOutline />,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="filter-block mb-30">
                                        <h5 className="medium-heading mb-10">Danh mục</h5>
                                        <div className="form-group">
                                            <Select
                                                value={formData.categoryName}
                                                onChange={(option) =>
                                                    setFormData((prev) => ({ ...prev, categoryName: option }))
                                                }
                                                options={categoryOptions}
                                                placeholder="Danh mục"
                                                isClearable
                                                styles={customStyles}
                                                className="mr-10"
                                                components={{
                                                    IndicatorSeparator: () => <BiCategory />,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="filter-block mb-30">
                                        <h5 className="medium-heading mb-10">Vị trí</h5>
                                        <div className="form-group">
                                            <Select
                                                value={formData.position}
                                                onChange={(option) =>
                                                    setFormData((prev) => ({ ...prev, position: option }))
                                                }
                                                options={POSITIONS}
                                                placeholder="Vị trí tuyển dụng"
                                                isClearable
                                                styles={customStyles}
                                                className="mr-10"
                                                components={{
                                                    IndicatorSeparator: () => <BiCategory />,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="filter-block mb-30">
                                        <h5 className="medium-heading mb-10">Kinh nghiệm</h5>
                                        <div className="form-group">
                                            <ul className="list-checkbox">
                                                <li>
                                                    <label
                                                        className="cb-container"
                                                        onClick={() =>
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                experience: 'Không yêu cầu kinh nghiệm',
                                                            }))
                                                        }
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                'Không yêu cầu kinh nghiệm' === formData?.experience
                                                            }
                                                        />
                                                        <span className="text-small">Không yêu cầu </span>
                                                        <span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        className="cb-container"
                                                        onClick={() =>
                                                            setFormData((prev) => ({ ...prev, experience: '1 năm' }))
                                                        }
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={'1 năm' === formData?.experience}
                                                        />
                                                        <span className="text-small">1 năm </span>
                                                        <span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        className="cb-container"
                                                        onClick={() =>
                                                            setFormData((prev) => ({ ...prev, experience: '2 năm' }))
                                                        }
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={'2 năm' === formData?.experience}
                                                        />
                                                        <span className="text-small">2 năm </span>
                                                        <span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        className="cb-container"
                                                        onClick={() =>
                                                            setFormData((prev) => ({ ...prev, experience: '3 năm' }))
                                                        }
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={'3 năm' === formData?.experience}
                                                        />
                                                        <span className="text-small">3 năm </span>
                                                        <span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        className="cb-container"
                                                        onClick={() =>
                                                            setFormData((prev) => ({ ...prev, experience: '4 năm' }))
                                                        }
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={'4 năm' === formData?.experience}
                                                        />
                                                        <span className="text-small">4 năm </span>
                                                        <span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        className="cb-container"
                                                        onClick={() =>
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                experience: 'trên 5 năm',
                                                            }))
                                                        }
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={'trên 5 năm' === formData?.experience}
                                                        />
                                                        <span className="text-small">Trên 5 năm </span>
                                                        <span className="checkmark" />
                                                    </label>
                                                </li>
                                            </ul>
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

export default FindJob;
