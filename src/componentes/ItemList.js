import {Item} from "./Item"

export const ItemList = ({datos = []}) =>{

    return (
            datos.map(producto => <Item key={producto.id} productos={producto}/>)

    )

}