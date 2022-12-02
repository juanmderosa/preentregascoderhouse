import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { CartItem } from "./CartItem"
import "./Cart.css"



export const Cart = () =>{

   const {cart, totalPrice} = useContext(CartContext);


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

   return (
   <>
      <h2 className="cartDetail">Detalle del Pedido</h2>
      {
         cart.map(product => <CartItem key={product.id} product={product}/>)
      }
      <div className="finalizar-container">
         <p className="totalPrice">Total: ${totalPrice()}</p>
         <Link to="/checkout" className="btn-finalizar">Finalizar compra</Link>
      </div>
   </>
   )
}

