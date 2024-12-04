function LoadingSearch() {
    return (
        <>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center preloader-search">
                    <div className="preloader-inner position-relative">
                        <div className="text-center">
                            <img
                                src={`${import.meta.env.VITE_PUBLIC_URL}/public/assets/imgs/template/shot.gif`}
                                alt="jobBox"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoadingSearch;