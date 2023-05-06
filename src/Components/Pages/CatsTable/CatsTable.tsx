import { useEffect, useState } from "react";
import "./CatsTable.css";
import { CatsModel } from "../../../Models/CatsModel";
import axios from "axios";
import { GiHollowCat } from 'react-icons/gi';

function CatsTable(): JSX.Element {
    const [table, setTable] = useState<CatsModel[]>([]);
    const header = ['ID', 'Name', 'Weight', 'Color', 'Birthday', 'Image'];
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json')
             .then(res => {
                setTable(res.data);
                console.log('Data load successfully');
            })
             .catch(err => {console.log('Data did not load');})
    }, []);

    return (
        <div className="CatsTable">
            <div className="coteret">
                <h2>The Cats List</h2>
                <input type="text" placeholder="Search cat's name or birthday" className="border"
                    value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            </div>
            <table>
                <thead>
                    <tr>
                        {header.map(h => <th key={h}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        table.filter(t => t.name.toLowerCase().includes(search) || t.birthday.toLowerCase().includes(search)).map(t => 
                            <tr key={t.name}>
                                <td>{t.id}</td>
                                <td>{t.name}</td>
                                <td>{t.weight}</td>
                                <td>{t.color}</td>
                                <td>{t.birthday}</td>
                                <td>
                                    <GiHollowCat size={60}/>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
}

export default CatsTable;
