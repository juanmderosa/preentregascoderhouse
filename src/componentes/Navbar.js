import logo from "../assets/img/logo.png"
import "./Navbar.css"
import {CartWidget} from "./CartWidget"

export function NavBar (){
    return <header>
                <nav className="navHeader">
                    <div className="logoTitle">
                            <a href="#"><img src={logo} alt="logo" className="logoNav"/></a>
                        <h1 className="titleNav">TIENDA DE MÚSICA</h1>
                    </div>
                    <ul className="ulNav">
                        <li className="ulNav-li"><a href="#">Productos</a></li>
                        <li className="ulNav-li"><a href="#">Contacto</a></li>
                        <li className="ulNav-li"><a href="#">¿Cómo Comprar?</a></li>
                    </ul>
                    <div className="cartWidget"><CartWidget/></div>
                </nav>
            </header>
}