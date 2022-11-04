import { useState } from "react";
import "./ItemCount.css"

export const ItemCount = ({stock, initial, onAdd}) =>{

    const [qty, setQty] = useState(parseInt(initial))

    onAdd = () =>{

            console.log(`Agregaste ${qty} productos al carrito`)
    }

    let stockRestante = stock - qty

    return <div className="container">
                <div className="itemCounContainer">
                    <button className="btn-masMenos" disabled={qty === 0}  onClick={() => setQty(qty - 1)}>-</button>
                    <p>{qty}</p>
                    <button className="btn-masMenos" disabled={stockRestante === 0} onClick={() => setQty(qty + 1)}>+</button>
                    <button className="btn-agregarCarrito" disabled = {qty === 0} onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
}