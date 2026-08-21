import { useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

// change 'Products' & 'Contacts' & add more if required
export default function NavBar() {

    // Get the theme and setTheme from the ThemeContext
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
	setTheme(theme === "dark" ? "light" : "dark");
    };
    
    return (
	<div className="navbar">
	    <nav>
		<ul className="nav-left">
		    <li>
			<Link to="/" className="nav_link">
			    Dashboard
			</Link>
		    </li>
		    <li>
			<Link to="/events" className="nav_link">
			    Events
			</Link>
		    </li>
		    <li>
			<Link to="/help" className="nav_link">
			    Help
			</Link>
		    </li>
		</ul>

		<div className="nav-right">
		    <Link to="/login" className="nav_link">
			Login
		    </Link>

		    <Link to="/register" className="nav_link">
			Register
		    </Link>

		    <button
			className="theme-button"
			onClick={toggleTheme}
		    >
			{theme === "dark" ? "☀️" : "🌙"}
		    </button>
		</div>
	    </nav>
	</div>
    );
}
