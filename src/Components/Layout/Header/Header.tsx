import "./Header.css";
import { IoLogoOctocat } from 'react-icons/io';

function Header(): JSX.Element {
    return (
        <div className="Header centerRow">
			<h1><IoLogoOctocat/> The cool cats app <IoLogoOctocat/></h1>
        </div>
    );
}

export default Header;
