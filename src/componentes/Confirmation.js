import "./Confirmation.css"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { OrderContext } from "../context/OrderContext"


export const Confirmation = () =>{

    const {cart, totalPrice, totalProducts} = useContext(CartContext);
    const {name, email, phone, address} = useContext(OrderContext);

    return(
        <div className="confirmation-container">
            <h3 className="titleh3">¡Gracias por tu Compra!</h3>
            <h2 className="titleh2">Tu pedido se procesó correctamente</h2>
            <h3 className="titleh3">Detalle del Pedido</h3>
            <section className="datos-container">
                <div className="datosyproductos-container">
                    <h4 className="titleh4">DATOS</h4>
                    <p className="datosP"><span className="datosSpan">Nombre:</span> {name}</p>
                    <p className="datosP"><span className="datosSpan">E-mail:</span> {email}</p>
                    <p className="datosP"><span className="datosSpan">Dirección:</span> {address}</p>
                    <p className="datosP"><span className="datosSpan">Teléfono:</span> {phone}</p>
                </div>
                <div className="datosyproductos-container">
                    <h4 className="titleh4">PRODUCTOS</h4>
                    {cart.map(product => { return <p key={product.id} className="datosP">{product.title} x {product.quantity} unidades, Precio Unitario ${product.price}</p>
                    })}
                    <div className="totalPriceContainer">
                        <h4 className="totales">Total Pedido ${totalPrice()}</h4>
                        <h4 className="totales">Total Productos: {totalProducts()}</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}