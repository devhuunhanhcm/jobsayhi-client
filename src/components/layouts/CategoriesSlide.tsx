// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react';
import { Category } from '../model/Category';
const categoriesSample = [
    {
        href: 'jobs-list.html',
        imageUrl: 'assets/imgs/page/homepage1/lightning.svg',
        title: 'Software',
        description: '',
        count: 185,
        id: '1',
    },
    {
        href: 'jobs-list.html',
        imageUrl: 'assets/imgs/page/homepage1/lightning.svg',
        title: 'Software',
        description: '',
        count: 185,
        id: '1',
    },
    {
        href: 'jobs-list.html',
        imageUrl: 'assets/imgs/page/homepage1/lightning.svg',
        title: 'Software',
        description: '',
        count: 185,
        id: '1',
    },
    {
        href: 'jobs-list.html',
        imageUrl: 'assets/imgs/page/homepage1/lightning.svg',
        title: 'Software',
        description: '',
        count: 185,
        id: '1',
    },
    {
        href: 'jobs-list.html',
        imageUrl: 'assets/imgs/page/homepage1/lightning.svg',
        title: 'Software',
        description: '',
        count: 185,
        id: '1',
    },
    {
        href: 'jobs-list.html',
        imageUrl: 'assets/imgs/page/homepage1/lightning.svg',
        title: 'Software',
        description: '',
        count: 185,
        id: '1',
    },
    {
        href: 'jobs-list.html',
        imageUrl: 'assets/imgs/page/homepage1/lightning.svg',
        title: 'Software',
        description: '',
        count: 185,
        id: '1',
    },
    {
        href: 'jobs-list.html',
        imageUrl: 'assets/imgs/page/homepage1/lightning.svg',
        title: 'Software',
        description: '',
        count: 185,
        id: '1',
    },
];

function CategoriesSlide() {
    const [categories, setCategories] = useState<Category[]>(categoriesSample);

    return (
        <>
            <section className="section-box mt-80">
                <div className="section-box wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                Browse by category
                            </h2>
                            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                Find the job that’s perfect for you. about 800+ new jobs everyday
                            </p>
                        </div>
                        <div className="mt-50">
                            <div className="swiper-container">
                                <Swiper
                                    className="swiper-wrapper pb-70 pt-5"
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={50}
                                    slidesPerView={4}
                                    navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    {categories.map((cate) => (
                                        <SwiperSlide key={cate.id} className="swiper-slide hover-up">
                                            <a href={cate.href}>
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src={cate.imageUrl} />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>{cate.title}</h4>
                                                        <p className="font-xs">
                                                            {cate.count}
                                                            <span> Jobs Available</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CategoriesSlide;
