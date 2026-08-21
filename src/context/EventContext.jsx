// this throws a warning by the linter 'npm run lint' because it doesn't like exporting the context object & react component at the same time
// ignore this -> the solution involves splitting this simple file into 2, making the workflow more complex & confusing

// createContext -> creates a 'context' that the components can use to share data
import { createContext, useState } from "react";

// creates a context object -> other components can import this
export const EventContext = createContext();

// childen -> whatever components are placed inside <EventProvider> can receieve the data (i.e. in main.jsx)
export const EventProvider = ({ children }) => {

    // create the variable events & the function setEvents to change events
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Music Festival",
            description: "A live music event.",
        },
        {
            id: 2,
            title: "Football Match",
            description: "Local football match.",
        },
        {
            id: 3,
            title: "Food Festival",
            description: "A festival celebrating local food.",
        },
    ]);

    // Allows events variable & the setEvents function to be avilable through the EventContext variable
    // children -> as above comment, renders what I put inside the provider (check main.jsx)
    return (
        <EventContext.Provider value={{ events, setEvents }}>
            {children}
        </EventContext.Provider>
    );
};
