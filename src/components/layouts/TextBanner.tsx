import React from 'react';

interface TextBannerProps {
    title: string;
    desc: string;
    subDesc: string;
    bgImage?: string;
}

const TextBanner: React.FC<TextBannerProps> = ({ title, desc, subDesc, bgImage }) => {
    return (
        <>
            <section className="section-box-2">
                <div className="container">
                    <div
                        className="banner-hero banner-company"
                        style={{
                            backgroundImage: `url(${bgImage})`,
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="block-banner text-center">
                            <h3 className="wow animate__animated animate__fadeInUp text-white">{title}</h3>
                            <div
                                className="font-sm text-white mt-10 wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                {desc}
                                <br className="d-none d-xl-block" />
                                {subDesc}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TextBanner;
