import { useFormik } from 'formik';
import * as yup from 'yup';
import { LoginDTO } from '../redux/Slice/AuthSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { login } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const validationSchema = yup.object({
    username: yup.string().required('Nhập tên đăng nhập.').min(6, 'Tên đăng nhập ít nhất 6 kí tự.'),
    password: yup
        .string()
        .required('Nhập mật khẩu.')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password ít nhất 8 ký tự, tồn tại 1 chữ số và một ký tự đặt biệt.',
        ),
});

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const errorMessage = useAppSelector((state) => state.auth.errors);

    const handleSubmit = async (values: LoginDTO) => {
        const result = await login(values);
        if (result) {
            navigate('/');
        }
    };

    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validateOnBlur: true,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });
    return (
        <>
            <section className="pt-100 login-register">
                <div className="container">
                    <div className="row login-register-cover">
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="text-center">
                                <p className="font-sm text-brand-2">Welcome back! </p>
                                <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                                <button className="btn social-login hover-up mb-20">
                                    <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                    <strong>Đăng nhập với Google</strong>
                                </button>
                                <div className="divider-text-center">
                                    <span>Đăng nhập với</span>
                                </div>
                            </div>
                            <form className="login-register text-start mt-20" onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-1">
                                        Username
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
                                    <label className="form-label" htmlFor="input-4">
                                        Password *
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            className="form-control"
                                            id="input-4"
                                            required={true}
                                            placeholder="************"
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
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
                                <div className="login_footer form-group d-flex justify-content-between">
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">Nhớ trong 30 ngày</span>
                                        <span className="checkmark" />
                                    </label>
                                    <a className="text-muted" href="page-contact.html">
                                        Quên mật khẩu
                                    </a>
                                </div>
                                {errorMessage && <p className="text-danger mt-2 mb-2">{errorMessage}</p>}
                                <div></div>
                                <div className="form-group">
                                    <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
                                        Đăng nhập
                                    </button>
                                </div>
                                <div className="text-muted text-center">
                                    Bạn chưa có tài khoản? <a href="/register">Đăng ký </a>
                                </div>
                            </form>
                        </div>
                        <div className="img-1 d-none d-lg-block">
                            <img className="shape-1" src="assets/imgs/page/login-register/img-4.svg" alt="JobBox" />
                        </div>
                        <div className="img-2">
                            <img src="assets/imgs/page/login-register/img-3.svg" alt="JobBox" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
