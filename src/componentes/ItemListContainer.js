import "./ItemListContainer.css"

export function ItemListContainer ({greeting}) {

    return <div className="greetingContainer">
        <h3>"¡Hola <span>{greeting}</span>! Te damos la bienvenida a nuestra tienda online!"</h3>
    </div>
}