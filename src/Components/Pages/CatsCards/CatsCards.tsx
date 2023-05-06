import { useEffect, useState } from "react";
import Card from "../../Shared/Card/Card";
import "./CatsCards.css";
import { CatsModel } from "../../../Models/CatsModel";
import axios from "axios";

function CatsCards(): JSX.Element {
    const [card, setCard] = useState<CatsModel[]>([]);
    const [search, setSearch] = useState<string>('');


    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json')
             .then(res => {
                setCard(res.data);
                console.log('Data load successfully');
            })
             .catch(err => {console.log('Data did not load');})
    }, [])

    return (
        <div className="CatsCards">
            <div className="coteret">
                <h2>The Cats List</h2>
                <input type="text" placeholder="Search cat's name or birthday" className="border"
                    value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            </div>
            <div className="centerRow">
                {
                    card.filter(t => t.name.toLowerCase().includes(search) || t.birthday.toLowerCase().includes(search)).map(c => (<Card key={c.id} cat={c}/>))
                }
            </div>
        </div>
    );
}

export default CatsCards;
