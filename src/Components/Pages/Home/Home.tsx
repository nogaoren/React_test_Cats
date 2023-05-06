import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home centerColumn">
			<h2>Meow! Welcome to the Cats app.</h2>
            <h2> We are so glad you've decided to join us.</h2>
            <iframe 
            src="https://giphy.com/embed/gl8ymnpv4Sqha" 
            width="480" 
            height="480" 
            frameBorder="0" 
            className="giphy-embed" 
            allowFullScreen
            title="Cats GIF">
            </iframe>
        </div>
    );
}

export default Home;
