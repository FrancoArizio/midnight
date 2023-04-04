import Navbar from '../components/navBar';
import ItemListContainer from '../components/itemListContainer';
import data from "../data/data.json"

export default function Cars(){
    const info = data.filter((prod) => prod.category == "car")
    return (<>
    <Navbar/>;
    <ItemListContainer data={info}/>
    </>
    )
}