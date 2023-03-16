import logo from "../images/midnightclublogo.png"
export default function Navbar(){
    return <nav className="nav">
        <a href=""><img className="siteLogo" src={logo}></img></a> 
        <ul>
            <li><a>Modifications</a></li>
            <li><a>Cars</a></li>
            <li><a>About Us</a></li>
        </ul>
    </nav>
}
