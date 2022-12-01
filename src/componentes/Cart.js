import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { CartItem } from "./CartItem"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import "./Cart.css"
import { OrderContext } from "../context/OrderContext"



export const Cart = () =>{

   const {cart, totalPrice} = useContext(CartContext);
   const {name, email, phone, address} = useContext(OrderContext);

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

   const handleOrder = () =>{
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, order)
      .then(({id})=> console.log(id))
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

   return (
   <>
      <h2 className="cartDetail">Detalle del Pedido</h2>
      {
         cart.map(product => <CartItem key={product.id} product={product}/>)
      }
      <div className="finalizar-container">
         <p className="totalPrice">Total: ${totalPrice()}</p>
         <Link to="/checkout" className="btn-finalizar" onClick={handleOrder}>Finalizar compra</Link>
      </div>
   </>
   )
}

