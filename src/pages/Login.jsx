// external functions
import { useContext } from "react";
import { useFormik } from 'formik';
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// from 'context' directory
import { ThemeContext } from "../context/ThemeContext";

// from 'components' directory
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Login() {

    const { theme } = useContext(ThemeContext);
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    // create default email & password, then check the values below
    const formik = useFormik({
	initialValues: {
	email: '',
	password: '',
	},

	validate: values => {

	// if there's any errors, capture them & end the function
      	const errors = {};

	if (!values.email) {
	    errors.email = 'Email address is required';
	} else if (
	    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
	) {
	    errors.email = 'Invalid email address';
	}

	if (!values.password) {
	    errors.password = 'Password is required';
	} else if (values.password.length < 8) {
	    errors.password = 'Password must be at least 8 characters';
	}

	return errors;
	},

	// after clicking the submit button, log the user in if the user has the correct email & password
	onSubmit: values => {
	    const success = login(values.email, values.password);

	    if (success) {
		navigate("/");
	    } else {
		console.log("Invalid email or password");
	    }
	},
    });

    return (
	<div className={`app ${theme}`}>

	    <NavBar />
	    <main className="container py-4">
		<h1 className="mb-5">Login Page</h1>

		<div className="row justify-content-center">
		    <div className="col-md-6 col-lg-5">

			<Card>
			    {/* After onSubmit, run the built in formik submit function using the form */}
			    <form onSubmit={formik.handleSubmit}>

			    {/* Form information for the email */}
			    <div className="mb-3">
				<label htmlFor="email">Email Address</label>

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

				{formik.touched.email && formik.errors.email ? (
				<div className="text-danger">
				    {formik.errors.email}
				</div>
				) : null}
			    </div>

			    {/* Form information for the password */}
			    <div className="mb-3">
				<label htmlFor="password">Password</label>

				<input
				id="password"
				name="password"
				type="password"
				className="form-control"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
				placeholder="Enter your password"
				/>

				{formik.touched.password && formik.errors.password ? (
				<div className="text-danger">
				    {formik.errors.password}
				</div>
				) : null}
			    </div>

			    <Button type="submit" className="btn btn-primary">
				Login
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

export default Login;
