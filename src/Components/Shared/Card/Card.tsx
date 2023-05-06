import { CatsModel } from "../../../Models/CatsModel";
import "./Card.css";
import { GiHollowCat } from 'react-icons/gi';

interface CardProps{
    cat: CatsModel;
}

function Card(props: CardProps): JSX.Element {
    return (
        <div className="Card centerColumn border">
			<h3><span className="headline">Name:</span> {props.cat.name}</h3>
            <p><span className="headline">ID:</span> {props.cat.id}</p>
            <p><span className="headline">Weight:</span> {props.cat.weight}</p>
            <p><span className="headline">Color:</span> {props.cat.color}</p>
            <p><span className="headline">Birthday:</span> {props.cat.birthday}</p>
            <h2 className="image"><GiHollowCat size={60}/></h2>
        </div>
    );
}

export default Card;
