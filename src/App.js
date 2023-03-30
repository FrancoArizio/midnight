
import './styles.css';
import Navbar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import { Routes,route } from 'react-router-dom';
import cars from './pages/cars';
import aboutus from './pages/aboutus';
import mods from './pages/mods';

function App() {
  return ( <>
  <Navbar/>
  <ItemListContainer/>
</>)
  }



export default App;
