import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import {getFirestore, doc, getDoc} from "firebase/firestore"



export const ItemDetailContainer = () =>{

    const [data, setData] = useState([]);
    const {detalleID} = useParams()

    useEffect (()=>{
        const db= getFirestore();
        const product = doc(db, "products", detalleID);
        getDoc(product)
            .then((res) =>{
                if(res.exists()) {
                    setData({id: res.id , ...res.data()})
            }
            })
    },[detalleID])

    return(
        <ItemDetail data={data} />
    )

}