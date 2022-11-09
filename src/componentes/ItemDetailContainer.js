import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"

const prods = [
    {
        id: "1",
        title: "Guitarra Clásica",
        price : 1000,
        pictureUrl: "https://tiendafeedback.com.ar/11203-large_default/guitarra-clasica-valencia-vc-204-natural-satinada.jpg",
        description: "Marca: Antigua Casa Nuñez",
        category: "instrumentos"
    },
    {
        id: "2",
        title: "Guitarra Acústica",
        price : 1500,
        pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/813/752/products/spruce41-31-d9af8e704d16b81a9216426267078691-1024-1024.jpg",
        description: "Marca: Fender",
        category: "instrumentos"
    },
    {
        id: "3",
        title: "Guitarra Eléctrica",
        price : 2000,
        pictureUrl: "http://d2r9epyceweg5n.cloudfront.net/stores/001/784/472/products/squier-stratocaster1-6eaad5d24e056aa4cb16287218558147-640-0.jpg",
        description: "Marca: Fender",
        category: "instrumentos"
    },
    {
        id: "4",
        title: "Bajo Eléctrico",
        price : 2500,
        pictureUrl: "https://tiendafeedback.com.ar/14948-large_default/bajo-electrico-leonard-precision-4-cuerdas-negro.jpg",
        description: "Marca: Fender",
        category: "accesorios"
    },
    {
        id: "5",
        title: "Piano Eléctrico",
        price : 3000,
        pictureUrl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/055/570/products/es520b-111-a7c18815ee58599a5116269636959548-640-0.png",
        description: "Marca: Artesia",
        category: "accesorios"
    },
    {
        id: "6",
        title: "Batería",
        price : 5000,
        pictureUrl: "https://beatpxm.com/wp-content/uploads/2020/06/bateria.acustica-768x544.jpg",
        description: "Marca: Yamaha",
        category: "accesorios"
    }

]

export const ItemDetailContainer = () =>{

    const [data, setData] = useState([]);

    const {detalleID} = useParams()

    useEffect (()=>{
        const getData = new Promise (resolve =>{
            setTimeout(()=>{
                resolve(prods)
            }, 1000)
        });

        getData.then(res => setData(res.find(prods => prods.id === detalleID)))
    },[])

    return(
        <ItemDetail data={data} />
    )

}