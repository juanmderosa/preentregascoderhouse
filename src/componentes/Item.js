import "./Item.css"
import { Link } from "react-router-dom"

export const Item = ({productos}) => {


    return (
        <Link to={`/detalle/${productos.id}`} className="itemContainer">        
            <ul className="itemContainerUl">
                <img src={productos.pictureUrl} alt={productos.id} className="pictureURL"/>
                <li className="productosId">#ID{productos.id}</li>
                <li className="productosTitle">{productos.title}</li>
                <li className="productosPrice">Precio: ${productos.price}</li>
                <button className="productosButton">Ver detalle</button>    
            </ul>
        </Link>

    )


}