import { useFormik } from 'formik';
import * as yup from 'yup';
import { RegisterDTO } from '../redux/Slice/AuthSlice';
import { useState } from 'react';
import { register } from '../service/AuthService';
import { useAppDispatch } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    username: yup.string().required('Nhập tên đăng nhập.').min(5, 'Tên đăng nhập ít nhất 5 kí tự.'),
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
    const navigate = useNavigate();

    const handleSubmit = async (values: RegisterDTO) => {
        console.log(values);
        const result = await register(values);
        if (result) {
            navigate('/login');
        }
    };

    const formik = useFormik({
        initialValues: { username: '', password: '', email: '', rePassword: '', accountType: 'USER' },
        validateOnBlur: true,
        validateOnChange: true,
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
                                <p className="font-sm text-brand-2">Register </p>
                                <h2 className="mt-10 mb-5 text-brand-1">Start for free Today</h2>
                                <p className="font-sm text-muted mb-30">
                                    Access to all features. No credit card required.
                                </p>
                                <button className="btn social-login hover-up mb-20">
                                    <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                    <strong>Sign up with Google</strong>
                                </button>
                                <div className="divider-text-center">
                                    <span>Or continue with</span>
                                </div>
                            </div>
                            <form className="login-register text-start mt-20" onSubmit={formik.handleSubmit}>
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
                                        Re-Password *
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
                                        <span className="text-small">Agree our terms and policy</span>
                                        <span className="checkmark" />
                                    </label>
                                    <a className="text-muted" href="page-contact.html">
                                        Lean more
                                    </a>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
                                        Submit &amp; Register
                                    </button>
                                </div>
                                <div className="text-muted text-center">
                                    Already have an account? <a href="page-signin.html">Sign in</a>
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
