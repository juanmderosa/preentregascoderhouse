import { ItemCount } from "./ItemCount"
import "./ItemDetail.css"



export const ItemDetail = ({data}) =>{

    const onAdd = (qty) =>{
        console.log(`Agregaste ${qty} ${data.title} al carrito`)
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
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>
        </div>
    )
}

