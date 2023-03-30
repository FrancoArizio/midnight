import logo from "../images/midnightclublogo.png"
import cart from "../images/cart.png"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function Navbar(){
    return <nav className="nav">
        <a href=""><img className="siteLogo" src={logo}></img></a> 
        <ul>
            <li><Link to="/pages/mods.js">Modifications</Link></li>
            <li><Link to="/pages/cars.js">Cars</Link></li>
            <li><Link to="/pages/aboutus.js">About Us</Link></li>
        </ul>
        <img class="cart" src={cart}></img>
        <Outlet/>
    </nav>
}
