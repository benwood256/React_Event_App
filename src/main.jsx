import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Importing the components
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Help from "./pages/Help";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

// Import the ThemeProvider
import { ThemeProvider } from "./context/ThemeContext";
import { EventProvider } from "./context/EventContext";

// Create a browser router
const router = createBrowserRouter([
    {
	path: "/",
	element: <Dashboard />,
    },
    {
	path: "/events",
	element: <Events />,
    },
    {
	path: "/help",
	element: <Help />,
    },

    {
	path: "/login",
	element: <Login />,
    },
    {
	path: "/register",
	element: <Register />,
    },

    {
	path: "*",
	element: <NotFound />,
    },
]);

// StrictMode     -> React is checking my app for potential problems
// ThemeProvider  -> Provides my theme context to everything inside it (so any page can set the theme)
// EventProvider  -> The same as the above but for Events (from EventContext.cs)
// RouterProvider -> Rendering my 'pages' (using the above 'router' function)
createRoot(document.getElementById("root")).render(
    <StrictMode>
	<ThemeProvider>
	    <EventProvider>
		<RouterProvider router={router} />
	    </EventProvider>
	</ThemeProvider>
    </StrictMode>
);
