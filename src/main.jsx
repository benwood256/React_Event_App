import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Importing the components
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

// Import the ThemeProvider
import { ThemeProvider } from "./ThemeContext";

// Create a browser router
const router = createBrowserRouter([
    {
	path: "/",
	element: <Home />,
    },
    {
	path: "/products",
	element: <Products />,
    },
    {
	path: "/contacts",
	element: <Contacts />,
    },
    {
	path: "*",
	element: <NotFound />,
    },
]);

// Render the router wrapped in the ThemeProvider
createRoot(document.getElementById("root")).render(
    <StrictMode>
	<ThemeProvider>
	    <RouterProvider router={router} />
	</ThemeProvider>
    </StrictMode>
);
