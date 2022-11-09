import logo from "../assets/img/logo.png"
import "./Navbar.css"
import {CartWidget} from "./CartWidget"
import { NavLink } from "react-router-dom"

export function NavBar (){
    return <header>
                <nav className="navHeader">
                    <div className="logoTitle">
                            <NavLink to="/"><img src={logo} alt="logo" className="logoNav"/></NavLink>
                        <h1 className="titleNav">TIENDA DE MÚSICA</h1>
                    </div>
                    <ul className="ulNav">
                        <li className="ulNav-li"><NavLink to="/categoria/instrumentos">Instrumentos</NavLink></li>
                        <li className="ulNav-li"><NavLink to="/categoria/accesorios">Accesorios</NavLink></li>
{/*                         <li className="ulNav-li"><NavLink to="/">¿Cómo Comprar?</NavLink></li> */}
                    </ul>
                    <div className="cartWidget"><NavLink to="/cart"><CartWidget/></NavLink></div>
                </nav>
            </header>
}