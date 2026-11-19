// external functions
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// from 'context' directory
import { ThemeContext } from "../context/ThemeContext"; 
import { EventContext } from "../context/EventContext";
import { AuthContext } from "../context/AuthContext";

// from 'components' directory
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Dashboard() {

    // so I can use the 'event page' button to jump to a different page
    const navigate = useNavigate();

    // Get the theme from the ThemeContext
    const { theme } = useContext(ThemeContext);

    // Check if the user is logged in or not
    const { user, isLoggedIn } = useContext(AuthContext);

    // this populates a new 'events' variable with the EventContext array (from EventContext.jsx)
    // useContext is used to retrieve the data within EventContext
    const { events } = useContext(EventContext);

    // Only retrieve events belonging to the logged-in user
    const userEvents = events.filter(
	event => event.userId === user?.id
    );
    
    // 'events' 
    if (isLoggedIn) {
	return (
	    <div className={`app ${theme}`}>
		<NavBar />

		<main className="container py-4">
		    <h1 className="mb-5">{user.firstName}'s Dashboard</h1>

		    <div className="row g-4">
			{userEvents.length === 0 ? (
			    <div>
				<br></br>
				<h5>You currently have no events, go to the events page</h5>
				<br></br>

				<Button onClick={() => navigate("/events")}>
				    Events Page
				</Button>
			    </div>
			) : (

			    userEvents.map((event) => (
				<div className="dashboard-event col-md-4" key={event.id}>
				    <Card title={event.name}>
					<hr></hr>

					<p>Date: {event.date || "N/A"}</p>
					<p>Time: {event.time || "N/A"}</p>
					<p>Description: {event.description || "N/A"}</p>
					<p>Location: {event.location || "N/A"}</p>
				    </Card>
				</div>
			    ))
			)}
		    </div>

		</main>

		<Footer />
	    </div>
	)
    }
    else {
	return (
	    <div className={`app ${theme}`}>
		<NavBar />

		<main className="container py-4">

		    <div className="row g-4">
			<h2 className="not-logged-in">You currently aren't logged in, please register or log in to access the dashboard</h2>
		    </div>
		</main>
	    </div>
	);
    }
}
