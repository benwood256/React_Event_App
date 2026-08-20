import { useLocation } from "react-router-dom";
import { useContext } from "react";

// person imports
import { ThemeContext } from "../ThemeContext";
import NavBar from "../routes/NavBar"; //import the navigation bar
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Products() {
    // Get the location object
    const location = useLocation();

    // Get the data from the location object
    const data = location.state;

    // Get the theme from the ThemeContext
    const { theme } = useContext(ThemeContext);
    
    // default 3x3 product page set up (with styling in css)
    return (
	<div className={`app ${theme}`}>
	    <NavBar />

	    <main className="container py-4">
		<h1 className="mb-5">Products</h1>

		<div className="row g-4">

		    <div className="col-md-4">
			<Card title="Product 1">
			    <p>Product description goes here.</p>
			    <Button>View Product</Button>
			</Card>
		    </div>

		    <div className="col-md-4">
			<Card title="Product 2">
			    <p>Product description goes here.</p>
			    <Button>View Product</Button>
			</Card>
		    </div>

		    <div className="col-md-4">
			<Card title="Product 3">
			    <p>Product description goes here.</p>
			    <Button>View Product</Button>
			</Card>
		    </div>

		    <div className="col-md-4">
			<Card title="Product 4">
			    <p>Product description goes here.</p>
			    <Button>View Product</Button>
			</Card>
		    </div>

		    <div className="col-md-4">
			<Card title="Product 5">
			    <p>Product description goes here.</p>
			    <Button>View Product</Button>
			</Card>
		    </div>

		    <div className="col-md-4">
			<Card title="Product 6">
			    <p>Product description goes here.</p>
			    <Button>View Product</Button>
			</Card>
		    </div>

		    <div className="col-md-4">
			<Card title="Product 7">
			    <p>Product description goes here.</p>
			    <Button>View Product</Button>
			</Card>
		    </div>

		    <div className="col-md-4">
			<Card title="Product 8">
			    <p>Product description goes here.</p>
			    <Button>View Product</Button>
			</Card>
		    </div>

		    <div className="col-md-4">
			<Card title="Product 9">
			    <p>Product description goes here.</p>
			    <Button>View Product</Button>
			</Card>
		    </div>

		</div>
	    </main>

	    <Footer />
	</div>
    );
}
