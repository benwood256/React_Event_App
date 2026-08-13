// if a page can't be found, this will display (instead of a big blank/broken screen)

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import NavBar from "../routes/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

export default function NotFound() {
    const { theme } = useContext(ThemeContext);

    return (
	<div className={`app ${theme}`}>
	    <NavBar />

	    <main className="container py-4">
		<h1 className="mb-5">404 - Page Not Found</h1>

		<div className="row justify-content-center">
		    <div className="col-md-8 col-lg-6">

			<Card title="404">
			    <p className="mb-4">
				Sorry, the page you are looking for
				does not exist.
			    </p>

			    <Link to="/" className="text-decoration-none">
				<Button>
				    Return Home
				</Button>
			    </Link>
			</Card>

		    </div>
		</div>
	    </main>

	    <Footer />
	</div>
    );
}
