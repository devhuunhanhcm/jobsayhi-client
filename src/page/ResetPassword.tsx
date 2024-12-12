import React from 'react';

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = ({}) => {
    return (
        <>
            <section className="pt-100 login-register">
                <div className="container">
                    <div className="row login-register-cover">
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="text-center">
                                <p className="font-sm text-brand-2">Quên mật khẩu</p>
                                <h2 className="mt-10 mb-5 text-brand-1">Đặt lại mật khẩu của bạn</h2>
                                <p className="font-sm text-muted mb-30">Nhập email khởi tạo tài khoản của bạn</p>
                            </div>
                            <form className="login-register text-start mt-20" action="#">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-1">
                                        Email *
                                    </label>
                                    <input
                                        className="form-control"
                                        id="input-1"
                                        type="text"
                                        required={true}
                                        name="emaill"
                                        placeholder="stevenjob@gmail.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-brand-1 hover-up w-100" type="submit" name="continue">
                                        Tiếp tục
                                    </button>
                                </div>
                                <div className="text-muted text-center">
                                    Bạn không có tài khoản? <a href="page-signin.html">Đăng ký ngay!</a>
                                </div>
                            </form>
                        </div>
                        <div className="img-1 d-none d-lg-block">
                            <img className="shape-1" src="assets/imgs/page/login-register/img-5.svg" alt="JobBox" />
                        </div>
                        <div className="img-2">
                            <img src="assets/imgs/page/login-register/img-3.svg" alt="JobBox" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResetPassword;
