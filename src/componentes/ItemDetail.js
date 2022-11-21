import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../context/CartContext"
import "./ItemDetail.css"



export const ItemDetail = ({data}) =>{

    const [irAlCarrito, setIrAlCarrito] = useState(false)
    const {addProduct} = useContext(CartContext)
    
    const onAdd = (qty) =>{
        setIrAlCarrito(true);
        addProduct(data,qty)
}

    return (
        <div className="itemDetailContainer">
            <div className="imgContainer">
                <img className="itemDetailImg" src={data.pictureUrl} alt={data.id}/>
            </div>
            <div className="descriptionContainer">
                <h1 className="itemDetailTitle">{data.title}</h1>
                <h2 className="itemDetailPrice">${data.price}</h2>
                <p className="itemDetailDescription">{data.description}</p>
                { irAlCarrito 
                ? <Link className="btn-TerminarCompra" to="/cart">Terminar Compra</Link>
                :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </div>
        </div>
    )
}

