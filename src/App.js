
import './styles.css';
import Navbar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import { Routes,route } from 'react-router-dom';
import cars from './pages/cars';
import aboutus from './pages/aboutus';
import mods from './pages/mods';

function App() {
  return ( <>
  <Routes>
    <Route path="/" element={<Navbar/>}>
    <Route path="cars" element={<cars/>}/>,
    <Route path="mods" element={<mods/>}/>
    <Route path="aboutus" element={<aboutus/>}/>
    
    </Route>
  </Routes>
  <Navbar/>
  <ItemListContainer/>
</>)
  }



export default App;
