import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu centerColumn">
			<Link to="home">Home</Link> 
            <Link to="cards">Cats in Cards</Link> 
            <Link to="table">Cats in Table</Link>
            <Link to="about">About</Link> 
        </div>
    );
}

export default Menu;
