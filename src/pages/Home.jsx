import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// personal imports
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext
import NavBar from "../routes/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
    const nav = useNavigate();

    // Get the theme and setTheme from the ThemeContext
    const { theme, setTheme } = useContext(ThemeContext);

    return (
	<div className={`app ${theme}`}>
	    <NavBar />

	    <main className="container py-4">
		<h1 className="mb-5">Home</h1>

		<div className="row g-4">

		    <div className="col-md-12">
			<Card title="Welcome">
			    <p>
				Welcome to the React + Vite starter template.
			    </p>

			    <Button>
				Test Button
			    </Button>
			</Card>
		    </div>

		    <div className="col-md-6">
			<Card title="About">
			    <p>
				This is a reusable React template with
				Bootstrap, React Router and theme support.
			    </p>

			    <Button variant="secondary">
				Learn More
			    </Button>
			</Card>
		    </div>

		    <div className="col-md-6">
			<Card title="Getting Started">
			    <p>
				Replace this content with whatever your
				project needs.
			    </p>

			    <Button>
				Get Started
			    </Button>
			</Card>
		    </div>

		</div>
	    </main>

	    <Footer />
	</div>
    );
}
