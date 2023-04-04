import data from "./data/data.json"
import './styles.css';
import Navbar from './components/navBar';
import ItemListContainer from './components/itemListContainer';

function App() {
  return ( <>
  <Navbar/>
  <ItemListContainer data={data}/>
</>)
  }



export default App;
