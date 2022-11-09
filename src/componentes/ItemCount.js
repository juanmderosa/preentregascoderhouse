import { useEffect, useState } from "react";
import "./ItemCount.css"

export const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount] = useState(parseInt(initial))

    const aumentar = () => {
        setCount(count + 1)
    }

    const disminuir = () =>{
        setCount(count - 1)
    }

    return <div className="container">
                <div className="itemCounContainer">
                    <button className="btn-masMenos" disabled={count <= 1}  onClick={disminuir}>-</button>
                    <p>{count}</p>
                    <button className="btn-masMenos" disabled={count >= stock} onClick={aumentar}>+</button>
                    <button className="btn-agregarCarrito" disabled = {stock <=0} onClick={()=> onAdd(count)}>Agregar al Carrito</button>
                </div>
            </div>
}