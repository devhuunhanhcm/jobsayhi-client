import React from 'react';

interface BannerProps {
    url: string;
}

const Banner: React.FC<BannerProps> = ({ url }) => {
    return (
        <>
            <img src={url} alt="banner" />
        </>
    );
};

export default Banner;
