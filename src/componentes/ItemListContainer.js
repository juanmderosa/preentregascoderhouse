import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import {ItemList} from "./ItemList"
import { useParams } from "react-router-dom"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

export function ItemListContainer ({greeting}) {

    const [productos, setProductos] = useState([]);

    const {categoriaID} = useParams()

    useEffect (() =>{
        const db= getFirestore();
        const getProductsCollection = collection(db, "products");
        
        
        if (categoriaID){
            const productsFilter = query(getProductsCollection, where("category", "==", categoriaID))
            getDocs(productsFilter)       
            .then(res=> setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        }else{
            getDocs(getProductsCollection)       
            .then(res=> setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        }
    },[categoriaID])

    return (
    <div className="greetingContainer">
        <div>
            <h3>"¡Hola! Te damos la bienvenida a nuestra tienda online!"</h3>
            <main className="ItemListContainer">
            <ItemList datos={productos}/>
            </main>

        </div>
    </div>
    )
}