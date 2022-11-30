import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./CartItem.css"

export const CartItem = ({product}) =>{

    const {removeProduct} = useContext(CartContext)

    return(
        <div className="cartItem-container">
            <div>
                <img className="cartItem-img" src={product.pictureUrl} alt={product.title}/>
            </div>
            <div className="cartItem-detailContainer">
                <p className="cartItem-title">{product.title}</p>
                <p className="cartItem-qty">Cantidad: {product.quantity}</p>
                <p className="cartItem-price">Precio: ${product.price}</p>
                <p className="cartItem-subtotal">Subtotal: ${product.price * product.quantity} </p>
                <div className="cartItem-removeProduct-container">
                    <button className="cartItem-removeProduct" onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>

            </div>
        </div>
    )
}