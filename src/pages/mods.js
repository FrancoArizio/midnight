import Navbar from '../components/navBar';
import ItemListContainer from '../components/itemListContainer';
import data from "../data/data.json"

export default function Mods(){
    const info = data.filter((prod) => prod.category == "mod")
    return (<>
    <Navbar/>;
    <ItemListContainer data={info}/>
    </>
    )
}