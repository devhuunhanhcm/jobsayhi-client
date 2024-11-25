import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { IoLocationOutline } from 'react-icons/io5';
import { BiCategory } from 'react-icons/bi';
import { JobReview } from '../model/Job';
import { SearchResult } from '@/page/FindJob';
import { useNavigate } from 'react-router-dom';

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
}

interface SelectOption {
    value: string;
    label: string;
}

interface IProps {
    setSearchResults: (newSearchResults: SearchResult) => void;
    searchResults: SearchResult;
}

const SearchingBar: React.FC<IProps> = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [locations, setLocations] = useState<LocationData[]>([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState<SearchFormData>({
        keyword: '',
        location: null,
        categoryName: null,
    });
    const [isLoading, setIsLoading] = useState(false);

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
                const response = await axios.get<CategoryResponse>('http://localhost:8080/api/v1/category');
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

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const normalizedLocation = formData.location?.value
            ?.replace(/^Thành phố\s*/i, '')
            ?.replace(/^Tỉnh\s*/i, '')
            ?.trim();

        const queryParams = new URLSearchParams({
            keyword: formData.keyword || '', // Từ khóa tìm kiếm
            city: normalizedLocation || '', // Thành phố đã chuẩn hóa
            category: formData.categoryName?.value || '', // Danh mục
        }).toString();

        navigate(`/find?${queryParams}`);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            keyword: e.target.value,
        }));
    };

    // Custom styles for react-select
    const customStyles = {
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

    return (
        <section className="section-box">
            <div className="banner-hero hero-2">
                <div className="banner-inner">
                    <div className="block-banner">
                        <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">Tìm việc ngay!</h1>

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
                                        onChange={(option) => setFormData((prev) => ({ ...prev, location: option }))}
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

                                <button className="btn btn-default btn-find font-sm" type="submit" disabled={isLoading}>
                                    {isLoading ? 'Đang tìm...' : 'Tìm kiếm'}
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
    );
};

export default SearchingBar;
