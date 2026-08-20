import { useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext

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
		<ul className="nav-links">
		    <li>
			<Link to="/" className="nav_link">
			    Home
			</Link>
		    </li>
		    <li>
			<Link to="/products" className="nav_link">
			    Products
			</Link>
		    </li>
		    <li>
			<Link to="/contacts" className="nav_link">
			    Contacts
			</Link>
		    </li>
		</ul>

		<button
		    className="theme-button"
		    onClick={toggleTheme}>
		    {theme === "dark" ? "☀️" : "🌙"}
		</button>
	    </nav>
	</div>
    );
}
