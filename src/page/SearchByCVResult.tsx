import JobCardGrid from '@/components/layouts/JobCardGrid';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setJobsAction } from '@/redux/Slice/RecommendationsSlice';
import Pagination from 'rc-pagination';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { itemRender } from './FindJob';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import LoadingSearch from '@/components/layouts/LoadingSearch';
import { debounce } from 'lodash';
import { Form, InputGroup } from 'react-bootstrap';
import { IoMdSearch } from 'react-icons/io';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { CgArrowsExchange } from 'react-icons/cg';

interface SearchByCVResultProps {}
const pageSizeOptions = ['5', '10', '15', '20'];

const SearchByCVResult: React.FC<SearchByCVResultProps> = () => {
    const recommendations = useAppSelector((state) => state.recommendations);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useAppDispatch();
    const topRef = useRef<HTMLDivElement>(null);

    const location = useLocation();
    const navigate = useNavigate();
    const file = location.state?.file;
    const existingFileUrl = location.state?.existingFileUrl;

    const getFileName = useCallback(() => {
        if (file) return file.name;
        if (existingFileUrl) {
            const urlParts = existingFileUrl.split('/');
            return urlParts[urlParts.length - 1];
        }
        return 'Unknown File';
    }, [file, existingFileUrl]);

    const getRecommendations = useCallback(
        async (page: number, pageSize: number, search: string) => {
            setIsLoading(true);
            try {
                let response;
                const params = {
                    page,
                    limit: pageSize,
                    keyword: search,
                };

                if (file) {
                    const formData = new FormData();
                    formData.append('cv', file);
                    response = await axios.post(`${import.meta.env.VITE_API_AI_URL}/recommend/file`, formData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                        params,
                    });
                } else if (existingFileUrl) {
                    response = await axios.post(
                        `${import.meta.env.VITE_API_AI_URL}/recommend/drive-url-file`,
                        { file_url: existingFileUrl },
                        { params },
                    );
                }

                if (response?.data.status === 'success') {
                    const data = response.data;
                    dispatch(
                        setJobsAction({
                            data: data.data,
                            total: data.totalItems,
                            page: data.currentPage,
                            limit: pageSize,
                        }),
                    );
                    topRef.current?.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (err) {
                console.error('Error getting recommendations:', err);
                toast.error('Failed to get job recommendations');
                navigate('/search-by-cv');
            } finally {
                setIsLoading(false);
            }
        },
        [dispatch, file, existingFileUrl, navigate],
    );

    const debouncedGetRecommendations = useCallback(
        debounce((page: number, pageSize: number, search: string) => {
            getRecommendations(page, pageSize, search);
        }, 500),
        [getRecommendations],
    );

    useEffect(() => {
        if (location.state?.file || location.state?.existingFileUrl) {
            debouncedGetRecommendations(recommendations.page, recommendations.limit, searchTerm);
        } else {
            navigate('/search-by-cv');
        }
        return () => {
            debouncedGetRecommendations.cancel();
        };
    }, [
        location.state,
        recommendations.page,
        recommendations.limit,
        searchTerm,
        debouncedGetRecommendations,
        navigate,
    ]);

    const handlePageChange = (page: number, pageSize: number) => {
        dispatch(
            setJobsAction({
                ...recommendations,
                page,
                limit: pageSize,
            }),
        );
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        dispatch(
            setJobsAction({
                ...recommendations,
                page: 1,
            }),
        );
    };

    return (
        <div className="container mt-20">
            {isLoading && <LoadingSearch />}
            <div className="mb-4">
                <div className="mb-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <AiOutlineFileSearch className="me-2" size={26} />
                        <div>{getFileName()}</div>
                    </div>
                    <a href="/search-by-cv">
                        <CgArrowsExchange size={24} />
                        Thay đổi
                    </a>
                </div>
                <InputGroup ref={topRef}>
                    <InputGroup.Text>
                        <IoMdSearch />
                    </InputGroup.Text>
                    <Form.Control placeholder="Search jobs..." value={searchTerm} onChange={handleSearchChange} />
                </InputGroup>
            </div>
            {recommendations.data.map((job) => (
                <JobCardGrid key={job.id} job={job} />
            ))}
            <div className="d-flex justify-content-center mt-4">
                <Pagination
                    current={recommendations.page}
                    total={recommendations.total}
                    pageSize={recommendations.limit}
                    onChange={handlePageChange}
                    itemRender={itemRender}
                    showSizeChanger={true}
                    onShowSizeChange={handlePageChange}
                    pageSizeOptions={pageSizeOptions}
                    showTotal={(total, range) => `Hiển thị ${range[0]}-${range[1]} trên ${total} việc làm`}
                />
            </div>
        </div>
    );
};

export default SearchByCVResult;
