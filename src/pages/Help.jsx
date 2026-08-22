// external functions
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // so I can add links to the Buttons (to the other pages)

// from 'context' directory
import { ThemeContext } from "../context/ThemeContext";

// from 'components' directory
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Help() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
	<div className={`app ${theme}`}>
	    <NavBar />

	    <main className="container py-4">
		<h1 className="mb-5">Help</h1>

		<div className="row g-4">
		    
		    <em><h5>Click any of the below headers to jump to the respective pages</h5></em>

		    <div className="col-md-3">
			<Card>
			    <div className="redirect-buttons">
				<Button onClick={() => navigate("/login")}>
				    Login
				</Button>
			    </div>

			    <hr></hr>
			    <p>
				Enter your email & password to log in to your account
			    </p>
			</Card>
		    </div>

		    <div className="col-md-3">
			<Card>
			    <div className="redirect-buttons">
				<Button onClick={() => navigate("/register")}>
				    Register
				</Button>
			    </div>

			    <hr></hr>
			    <p>
				Here you can register an account if your new to this website
			    </p>

			</Card>
		    </div>


		    <div className="col-md-6">
			<Card>

			    <div className="redirect-buttons">
				<Button onClick={() => navigate("/")}>
				    Dashboard
				</Button>
			    </div>

			    <hr></hr>
			    <p>
				This will display your events.
				You need to populate them in the 'Events' page.
				To do this, click the 'Events' panel at the top.
			    </p>
			</Card>
		    </div>

		    <div className="col-md-12">
			<Card>

			    <div className="redirect-buttons">
				<Button onClick={() => navigate("/events")}>
				    Events
				</Button>
			    </div>

			    <hr></hr>
			    <div className="mb-3">
				<h5>The Display</h5>
			    </div>
			    <p>
				On the left is the view of your current Events.
				On the right you can add new events.
			    </p>
			    <hr></hr>

			    <div className="mb-3">
				<h5>Add Events</h5>
			    </div>
			    <p>
				On the right, populate the page & click the 'Add Event' button
				at the bottom.
			    </p>
			    <hr></hr>

			    <div className="mb-3">
				<h5>Edit Event Button</h5>
			    </div>
			    <p>
				On each event there is a clickable 'Edit Event'.
				After clicking, you can edit the event on the right.
				As the 'Add Event' will swap for 'Edit Event'.
			    </p>
			    <hr></hr>

			    <div className="mb-3">
				<h5>Delete Event Button</h5>
			    </div>
			    <p>
				Clicking this removes the event.
				You can see this happening in the Event page
				& swapping to the Dashboard it has also been removed.
			    </p>

			</Card>
		    </div>

		</div>
	    </main>

	    <Footer />
	</div>
    );
}
