import "./Checkout.css"
import { useState } from "react"
import { Confirmation } from "./Confirmation"
import { useContext } from "react"
import { OrderContext } from "../context/OrderContext"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore } from "firebase/firestore"





export const Checkout = () =>{
   
    const {name, email, phone, address, formaDePago, setName, setEmail, setPhone, setAddress, setformaDePago} = useContext(OrderContext);
    const {cart, totalPrice} = useContext(CartContext);
    const [verDetalle, setVerDetalle] = useState(false)

    const order = {
       buyer: {
          name,
          email,
          phone,
          address
       },
       items: cart.map(product=> ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
       total: totalPrice()
    }
 
    const handleOrder = (e) =>{
        e.preventDefault();
        
       const db = getFirestore();
       const orderCollection = collection(db, "orders");
       addDoc(orderCollection, order)
       .then(({id})=> console.log(id))
       setVerDetalle(true)
    }
    

    if(cart.length === 0){
        return(
           <>
           <div className="noProducts-container">
              <p className="noProducts">No hay productos agregados al carrito</p>
              <Link to="/" className="irComprar">Ir a Comprar</Link>
           </div>
              
           </>
        )
     }

    return(
        (!verDetalle ?  
        <div className="checkout-container">
        <h2 className="checkout-h2">Checkout</h2>
        <h3 className="checkout-h3">Completá tus datos para finalizar la compra</h3>
        <form className="checkout-form" onSubmit={handleOrder}>
            <input required onChange={(e)=> setName(e.target.value)} className="checkout-input" type="text" placeholder="Nombre" name="name" value= {name}/>

            <input required onChange={(e)=> setEmail(e.target.value)} className="checkout-input" type="email" placeholder="E-mail" name="email" value= {email}/>

            <input required onChange={(e)=> setAddress(e.target.value)} className="checkout-input" type="text" placeholder="Dirección" name="phone" value= {address}/>

            <input required onChange={(e)=> setPhone(e.target.value)} className="checkout-input" type="text" placeholder="Teléfono" name="address"  value= {phone}/>
            
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