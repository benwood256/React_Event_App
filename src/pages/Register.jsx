// external functions
import { useContext } from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom"; 

// from 'context' directory
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

// from 'components' directory
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Register() {
    const { theme } = useContext(ThemeContext);
    const { register } = useContext(AuthContext);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: values => {
            const errors = {};

            // First name validation
            if (!values.firstName) {
                errors.firstName = 'First name is required';
            } else if (values.firstName.length > 15) {
                errors.firstName = 'First name must not exceed 15 characters';
            }

            // Surname validation
            if (!values.surname) {
                errors.surname = 'Surname is required';
            } else if (values.surname.length > 20) {
                errors.surname = 'Surname must not exceed 20 characters';
            }

            // Email validation
            if (!values.email) {
                errors.email = 'Email address is required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            // Password validation
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters';
            } else if (!/[A-Z]/.test(values.password)) {
                errors.password =
                    'Password must contain at least one uppercase letter';
            } else if (!/[a-z]/.test(values.password)) {
                errors.password =
                    'Password must contain at least one lowercase letter';
            } else if (!/[0-9]/.test(values.password)) {
                errors.password =
                    'Password must contain at least one number';
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
                errors.password =
                    'Password must contain at least one special character';
            }

            // Confirm password validation
            if (!values.confirmPassword) {
                errors.confirmPassword = 'Please confirm your password';
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = 'Passwords do not match';
            }

            return errors;
        },

        onSubmit: values => {
            register({
                firstName: values.firstName,
                surname: values.surname,
                email: values.email,
                password: values.password
            });

            navigate("/");
        },
    });

    return (
        <div className={`app ${theme}`}>
            <NavBar />

            <main className="container py-4">
                <h1 className="mb-5">Registration Page</h1>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <Card>
                            <form onSubmit={formik.handleSubmit}>

                                {/* First Name */}
                                <div className="mb-3">
                                    <label htmlFor="firstName">
                                        First Name
                                    </label>

                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                        placeholder="Enter your first name"
                                    />

                                    {formik.touched.firstName &&
                                    formik.errors.firstName ? (
                                        <div className="text-danger">
                                            {formik.errors.firstName}
                                        </div>
                                    ) : null}
                                </div>

                                {/* Surname */}
                                <div className="mb-3">
                                    <label htmlFor="surname">
                                        Surname
                                    </label>

                                    <input
                                        id="surname"
                                        name="surname"
                                        type="text"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.surname}
                                        placeholder="Enter your surname"
                                    />

                                    {formik.touched.surname &&
                                    formik.errors.surname ? (
                                        <div className="text-danger">
                                            {formik.errors.surname}
                                        </div>
                                    ) : null}
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        placeholder="example@email.com"
                                    />

                                    {formik.touched.email &&
                                    formik.errors.email ? (
                                        <div className="text-danger">
                                            {formik.errors.email}
                                        </div>
                                    ) : null}
                                </div>

                                {/* Password */}
                                <div className="mb-3">
                                    <label htmlFor="password">
                                        Password
                                    </label>

                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        placeholder="Create a password"
                                    />

                                    {formik.touched.password &&
                                    formik.errors.password ? (
                                        <div className="text-danger">
                                            {formik.errors.password}
                                        </div>
                                    ) : null}
                                </div>

                                {/* Confirm Password */}
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>

                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                        placeholder="Confirm your password"
                                    />

                                    {formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword ? (
                                        <div className="text-danger">
                                            {formik.errors.confirmPassword}
                                        </div>
                                    ) : null}
                                </div>

                                <Button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Register
                                </Button>

                            </form>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Register;
