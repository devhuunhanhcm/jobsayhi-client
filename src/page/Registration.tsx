import { useFormik } from 'formik';
import * as yup from 'yup';
import { AccountType, RegisterDTO } from '../redux/Slice/AuthSlice';
import { useState } from 'react';
import { register } from '../service/AuthService';
import { useAppDispatch } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    username: yup.string().required('Nhập tên đăng nhập.').min(6, 'Tên đăng nhập ít nhất 6 kí tự.'),
    password: yup
        .string()
        .required('Nhập mật khẩu của bạn')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password ít nhất 8 ký tự, tồn tại 1 chữ số và một ký tự đặt biệt.',
        ),
    email: yup
        .string()
        .required('Nhập email')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Nhập đúng email của bạn.'),
    rePassword: yup
        .string()
        .required('Mật khẩu không khớp')
        .oneOf([yup.ref('password')], 'Nhập lại mật khẩu'),
});

function Registration() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setRePassword] = useState(false);

    const [accountType, setAccountType] = useState<AccountType>(AccountType.USER);

    const navigate = useNavigate();

    const handleSubmit = async (values: RegisterDTO) => {
        const data = {
            ...values,
            accountType,
        };

        const result = await register(data);
        if (result) {
            navigate('/login');
        }
    };

    const formik = useFormik({
        initialValues: { username: '', password: '', email: '', rePassword: '' },
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });
    const handleChangeAccountType = (accountType: AccountType) => {
        setAccountType(accountType);
    };
    return (
        <>
            <section className="pt-100 login-register">
                <div className="container">
                    <div className="row login-register-cover">
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="text-center">
                                <h2 className="mt-10 mb-5 text-brand-1">Đăng Ký</h2>
                                <button className="btn social-login hover-up mb-20">
                                    <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                    <strong>Đăng ký với Google</strong>
                                </button>
                                <div className="divider-text-center">
                                    <span>Hoặc tiếp tục với</span>
                                </div>
                            </div>
                            <form className="login-register text-start mt-20" onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-3">
                                        Đăng ký tài khoản cho
                                    </label>
                                    <div className="d-flex align-item-center justify-content-between account-type">
                                        <div
                                            className={`${accountType === AccountType.USER ? 'active' : ''}`}
                                            onClick={() => handleChangeAccountType(AccountType.USER)}
                                        >
                                            Người tìm việc
                                        </div>
                                        <div
                                            className={`${accountType === AccountType.COMPANY ? 'active' : ''}`}
                                            onClick={() => handleChangeAccountType(AccountType.COMPANY)}
                                        >
                                            Nhà tuyển dụng
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-3">
                                        Username *
                                    </label>
                                    <input
                                        className="form-control"
                                        id="input-1"
                                        type="text"
                                        required={true}
                                        placeholder="Username"
                                        name="username"
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.username && formik.errors.username ? (
                                        <p className="text-danger mt-2">{formik.errors.username}</p>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-2">
                                        Email *
                                    </label>
                                    <input
                                        className="form-control"
                                        id="input-2"
                                        type="email"
                                        required={true}
                                        placeholder="Email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <p className="text-danger mt-2">{formik.errors.email}</p>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-4">
                                        Password *
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            className="form-control "
                                            id="input-4"
                                            type={showPassword ? 'text' : 'password'}
                                            required={true}
                                            name="password"
                                            placeholder="Passowrd"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        <div className="eye-password" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? (
                                                <i className="fi fi-rr-eye"></i>
                                            ) : (
                                                <i className="fi fi-rr-eye-crossed"></i>
                                            )}
                                        </div>
                                    </div>
                                    {formik.touched.password && formik.errors.password ? (
                                        <p className="text-danger mt-2">{formik.errors.password}</p>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-5">
                                        Nhập lại Password *
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            className="form-control"
                                            id="input-5"
                                            type={showRePassword ? 'text' : 'password'}
                                            required={true}
                                            placeholder="Re Password"
                                            name="rePassword"
                                            value={formik.values.rePassword}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        <div className="eye-password" onClick={() => setRePassword(!showRePassword)}>
                                            {showRePassword ? (
                                                <i className="fi fi-rr-eye"></i>
                                            ) : (
                                                <i className="fi fi-rr-eye-crossed"></i>
                                            )}
                                        </div>
                                    </div>
                                    {formik.touched.rePassword && formik.errors.rePassword ? (
                                        <p className="text-danger mt-2">{formik.errors.rePassword}</p>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div className="login_footer form-group d-flex justify-content-between">
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">Đồng ý với điều khoản </span>
                                        <span className="checkmark" />
                                    </label>
                                    <a className="text-muted" href="page-contact.html">
                                        Chi tiết
                                    </a>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
                                        Đăng ký
                                    </button>
                                </div>
                                <div className="text-muted text-center">
                                    Bạn đã có tài khoản? <a href="/login">Đăng nhập </a>
                                </div>
                            </form>
                        </div>
                        <div className="img-1 d-none d-lg-block">
                            <img className="shape-1" src="assets/imgs/page/login-register/img-1.svg" alt="JobBox" />
                        </div>
                        <div className="img-2">
                            <img src="assets/imgs/page/login-register/img-2.svg" alt="JobBox" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Registration;
