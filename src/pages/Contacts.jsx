import { useContext } from "react";

// personal imports
import { ThemeContext } from "../ThemeContext";
import NavBar from "../routes/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Contacts() {
    const { theme } = useContext(ThemeContext);

    return (
	<div className={`app ${theme}`}>
	    <NavBar />

	    <main className="container py-4">
		<h1 className="mb-5">Contacts</h1>

		<div className="row g-4">

		    <div className="col-md-6">
			<Card title="Contact Information">
			    <p>
				Email: example@email.com
			    </p>

			    <p>
				Phone: 01234 567890
			    </p>

			    <p>
				Address: 123 Example Street
			    </p>
			</Card>
		    </div>

		    <div className="col-md-6">
			<Card title="Contact Form">
			    <form>
				<div className="mb-3">
				    <label
					htmlFor="name"
					className="form-label"
				    >
					Name
				    </label>

				    <input
					type="text"
					className="form-control"
					id="name"
					placeholder="Your name"
				    />
				</div>

				<div className="mb-3">
				    <label
					htmlFor="email"
					className="form-label"
				    >
					Email
				    </label>

				    <input
					type="email"
					className="form-control"
					id="email"
					placeholder="you@example.com"
				    />
				</div>

				<div className="mb-3">
				    <label
					htmlFor="message"
					className="form-label"
				    >
					Message
				    </label>

				    <textarea
					className="form-control"
					id="message"
					rows="4"
					placeholder="Your message..."
				    />
				</div>

				<Button type="submit">
				    Send Message
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
