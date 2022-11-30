import "./Checkout.css"
import { useState } from "react"
import { Confirmation } from "./Confirmation"

export const Checkout = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [formaDePago, setformaDePago] = useState("")
    const [verDetalle, setVerDetalle] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setVerDetalle(true)
    }

    return(
        (!verDetalle ?  
        <div className="checkout-container">
        <h2 className="checkout-h2">Checkout</h2>
        <h3 className="checkout-h3">Completá tus datos para finalizar la compra</h3>
        <form className="checkout-form" onSubmit={handleSubmit}>
            <input  onChange={(e)=> setName(e.target.value)} className="checkout-input" type="text" placeholder="Nombre" name="name" value= {name}/>
            <input onChange={(e)=> setEmail(e.target.value)} className="checkout-input" type="email" placeholder="E-mail" name="email" value= {email}/>
            <input onChange={(e)=> setAddress(e.target.value)} className="checkout-input" type="text" placeholder="Dirección" name="phone" value= {phone}/>
            <input onChange={(e)=> setPhone(e.target.value)} className="checkout-input" type="text" placeholder="Teléfono" name="address" 
                value= {address}/>
            <p className="checkout-formaDePago">Forma de Pago</p>
            <select onChange={(e)=> setformaDePago(e.target.value)} className="checkout-formaDePago-select" placeholder="Forma de pago" name={formaDePago}>
                <option className="checkout-formaDePago-option" value="tarjeta">Tarjeta</option>
                <option className="checkout-formaDePago-option" value="efectivo">Efectivo</option>
                <option className="checkout-formaDePago-option" value="transferencia">Transferencia</option>
            </select>
            <input type="submit" value="Pagar" className="btn-Pagar"></input>
        </form>
    </div>
    :
    <Confirmation/>)

    )
}