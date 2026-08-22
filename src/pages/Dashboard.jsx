// external functions
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// from 'context' directory
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext
import { EventContext } from "../context/EventContext";

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

    // this populates a new 'events' variable with the EventContext array (from EventContext.jsx)
    // useContext is used to retrieve the data within EventContext
    const { events } = useContext(EventContext);
    
    // 'events' 
    return (
	<div className={`app ${theme}`}>
	    <NavBar />

	    <main className="container py-4">
		<h1 className="mb-5">Welcome, {name}</h1>

		<div className="row g-4">
		    {events.length === 0 ? (
			<div>
			    <br></br>
			    <h5>You currently have no events, go to the events page</h5>
			    <br></br>

			    <Button onClick={() => navigate("/events")}>
				Events Page
			    </Button>
			</div>
		    ) : (

			events.map((event, index) => (
			    <div className="dashboard-event col-md-4" key={index}>
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
    );
}

