import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
			<h2>This is the cool cats app</h2>
            <p>Here we present few of our best and unique cats, chosen specifically for you.</p> 
            <p>You can see our cats in cards or listed in a table. For each cat we present the name, weight, color and a small picture.</p>
            <p>You can filter between the cats according to their name or birthday.</p>
        </div>
    );
}

export default About;
