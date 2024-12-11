function Footer() {
    return (
        <footer className="footer mt-50 border-top pt-50">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1 col-md-3 col-sm-12">
                        <a href="index.html">
                            <img
                                alt="jobBox"
                                src={`${import.meta.env.VITE_PUBLIC_URL}/assets/imgs/logo/logo-jobsayhi.png`}
                            />
                        </a>
                        <div className="mt-20 mb-20 font-xs color-text-paragraph-2">
                            Jobsayhi một website tìm việc thông minh ứng dụng AI để tìm việc chính xác và phù hợp nhất
                            với bạn!
                        </div>
                        <div className="footer-social">
                            <a className="icon-socials icon-facebook" href="#" />
                            <a className="icon-socials icon-twitter" href="#" />
                            <a className="icon-socials icon-linkedin" href="#" />
                        </div>
                    </div>
                    <div className="footer-col-2 col-md-2 col-xs-6">
                        <h6 className="mb-20">Resources</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Our Team</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col-3 col-md-2 col-xs-6">
                        <h6 className="mb-20">Community</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Feature</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Credit</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col-4 col-md-2 col-xs-6">
                        <h6 className="mb-20">Quick links</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">iOS</a>
                            </li>
                            <li>
                                <a href="#">Android</a>
                            </li>
                            <li>
                                <a href="#">Microsoft</a>
                            </li>
                            <li>
                                <a href="#">Desktop</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col-5 col-md-2 col-xs-6">
                        <h6 className="mb-20">More</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Help</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col-6 col-md-3 col-sm-12">
                        <h6 className="mb-20">Download App</h6>
                        <p className="color-text-paragraph-2 font-xs">Comming soon!</p>
                    </div>
                </div>
                <div className="footer-bottom mt-50">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span className="font-xs color-text-paragraph">Copyright © 2024. Dev by devhuunhan</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
