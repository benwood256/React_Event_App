// external functions
import { useContext } from "react";

// from 'context' directory
import { ThemeContext } from "../context/ThemeContext";

// from 'components' directory
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Events() {

    // Get the theme and setTheme from the ThemeContext
    const { theme } = useContext(ThemeContext);

    return (
	<div className={`app ${theme}`}>
	    <NavBar />

	    <main className="container py-4">
		<h1 className="mb-5">Event Manager</h1>

		<div className="row g-4">

		    <div className="col-md-7">
			<Card title="Current Events">

			    <p className="no-events-yet">
			    You currently have no events, create some on the right
			    </p>

			</Card>
		    </div>

		    <div className="col-md-5">
			<Card title="Add Event">
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
					placeholder="Event name"
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
				    Add Event
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
