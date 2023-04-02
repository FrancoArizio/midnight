import logo from "../images/midnightclublogo.png"
import cart from "../images/cart.png"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import {IoCart} from 'react-icons/io5'

export default function Navbar(){
    return <nav className="nav">
         <Link to="/"><img className="siteLogo" src={logo}></img></Link>
        <ul class='nav.ul'>
            <li><Link to="/mods">Modifications</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
        </ul>
        <IoCart className='cart' color={'white'}/>
        <Outlet/>
   
    </nav>
}
