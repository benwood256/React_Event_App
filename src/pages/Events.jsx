// external functions
import { useState, useContext } from "react";

// from 'context' directory
import { ThemeContext } from "../context/ThemeContext";
import { EventContext } from "../context/EventContext";

// from 'components' directory
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Events() {

    // Get the theme and setTheme from the ThemeContext
    const { theme } = useContext(ThemeContext);

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");

    // create the 'event' variable which will store all events as a variable
    const { events, setEvents } = useContext(EventContext);

    // allow me to change an event based on the 'index'
    const [editIndex, setEditIndex] = useState(null);

    // sort data into an object
    function handleAddEvent() {
	const newEvent = {
	    name: name,
	    date: date,
	    time: time,
	    description: description,
	    location: location
	};

	if (editIndex !== null) {
	    // Update existing event
	    setEvents((currentEvents) =>
		currentEvents.map((event, index) =>
		    index === editIndex ? newEvent : event
		)
	    );

	    // Exit edit mode
	    setEditIndex(null);
	} else {
	    // Add new event
	    setEvents((currentEvents) => [
		...currentEvents,
		newEvent
	    ]);
	}

	// Clear the form (i.e. empties what was entered after button is clicked)
	setName("");
	setDate("");
	setTime("");
	setDescription("");
	setLocation("");
	
    }

    // delete an individual event after the buttons clicked
    function deleteEvent(index) {
	setEvents((currentEvents) =>
	    currentEvents.filter((event, eventIndex) => eventIndex !== index));
    }

    // function to edit an event by retrieving the index & moving it to the Add Event page
    function editEvent(index) {
	const selectedEvent = events[index];

	setName(selectedEvent.name);
	setDate(selectedEvent.date);
	setTime(selectedEvent.time);
	setDescription(selectedEvent.description);
	setLocation(selectedEvent.location);

	setEditIndex(index);
    }

    return (
	<div className={`app ${theme}`}>
	    <NavBar />

	    <main className="container py-4">
		<h1 className="mb-5">Event Manager</h1>

		<div className="row g-4">

		    <div className="col-md-8">
			<Card title="Current Events" className="mb-5">
			    <div>
				{events.length === 0 ? (
				    <div>
					<br></br>
					<h5>You currently have no events, create some on the right</h5>
				    </div>
				) : (
				    <div className="event-list">
					<hr></hr>
					{events.map((event, index) => (
					    <div key={index}>
						<div className="event-item">
						    <h3>
							{event.name}
						    </h3>

						    <Button onClick={() => editEvent(index)}>Edit</Button>
						    <button
							className="btn btn-danger"
							onClick={() => deleteEvent(index)}
						    >Delete

						    </button>
						</div>
						<hr></hr>
					    </div>
					))}
				    </div>
				)}
			    </div>
			</Card>
		    </div>

		    <div className="col-md-4">
			<div className={editIndex !== null ? "edit-mode" : ""}>
			    <Card title={editIndex !== null ? "Edit Event" : "Add Event"}>
				<form onSubmit={(event) => { event.preventDefault(); handleAddEvent(); }}>
				    <div className="mb-3">
					<label
					    htmlFor="event-name"
					    className="form-label"
					>
					    Event name
					</label>

					<input
					    type="text"
					    className="form-control"
					    id="event-name"
					    value={name}
					    placeholder="Enter an event name"
					    maxLength="20"
					    required
					    onChange={(event) => setName(event.target.value)}
					/>
				    </div>

				    <div className="mb-3">
					<label
					    htmlFor="date"
					    className="form-label"
					>
					    Date
					</label>

					<input
					    type="date"
					    className="form-control text-center"
					    id="date"
					    value={date}
					    placeholder="Enter a date"
					    onChange={(event) => setDate(event.target.value)}
					/>
				    </div>

				    <div className="mb-3">
					<label
					    htmlFor="time"
					    className="form-label"
					>
					    Time
					</label>

					<input
					    type="time"
					    className="form-control text-center"
					    id="time"
					    value={time}
					    onChange={(event) => setTime(event.target.value)}
					/>
				    </div>

				    <div className="mb-3">
					<label
					    htmlFor="description"
					    className="form-label"
					>
					    Description
					</label>

					<textarea
					    type="text"
					    className="form-control"
					    id="description"
					    value={description}
					    rows="4"
					    placeholder="Enter a description"
					    onChange={(event) => setDescription(event.target.value)}
					/>
				    </div>

				    <div className="mb-3">
					<label
					    htmlFor="location"
					    className="form-label"
					>
					    Location
					</label>

					<input
					    type="text"
					    className="form-control"
					    id="location"
					    value={location}
					    placeholder="Enter a location"
					    onChange={(event) => setLocation(event.target.value)}
					/>
				    </div>

				    <Button type="submit">
					{editIndex !== null ? "Update Event" : "Add Event"}
				    </Button>
				</form>
			    </Card>
			</div>
		    </div>

		</div>
	    </main>

	    <Footer />
	</div>
    );
}
