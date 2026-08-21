// external functions
import { useContext } from "react";
import { EventContext } from "../context/EventContext";

// from 'context' directory
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

// from 'components' directory
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Dashboard() {

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
		    {events.map((event) => (
			<div className="col-md-4" key={event.id}>
			    <Card title={event.title}>
				<p>{event.description}</p>
				<Button>View Event</Button>
			    </Card>
			</div>
		    ))}
		</div>

	    </main>

	    <Footer />
	</div>
    );
}

