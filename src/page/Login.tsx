import { useFormik } from 'formik';
import * as yup from 'yup';
import { LoginDTO } from '../redux/Slice/AuthSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { login } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const validationSchema = yup.object({
    username: yup.string().required('Username is required.').min(5, 'Tên đăng nhập ít nhất 5 kí tự.'),
    password: yup
        .string()
        .required('Password is required.')
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
                                <p className="font-sm text-muted mb-30">
                                    Access to all features. No credit card required.
                                </p>
                                <button className="btn social-login hover-up mb-20">
                                    <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                    <strong>Sign in with Google</strong>
                                </button>
                                <div className="divider-text-center">
                                    <span>Or continue with</span>
                                </div>
                            </div>
                            <form className="login-register text-start mt-20" onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-1">
                                        Username or Email address *
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
                                        <span className="text-small">Remenber me</span>
                                        <span className="checkmark" />
                                    </label>
                                    <a className="text-muted" href="page-contact.html">
                                        Forgot Password
                                    </a>
                                </div>
                                {errorMessage && <p className="text-danger mt-2 mb-2">{errorMessage}</p>}
                                <div></div>
                                <div className="form-group">
                                    <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
                                        Login
                                    </button>
                                </div>
                                <div className="text-muted text-center">
                                    Don't have an Account? <a href="page-signin.html">Sign up</a>
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
