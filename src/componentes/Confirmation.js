import "./Confirmation.css"

export const Confirmation = () =>{
    return(
        <div className="confirmation-container">
            <h3 className="titleh3">¡Gracias por tu Compra!</h3>
            <h2 className="titleh2">Tu pedido se procesó correctamente</h2>
            <h3 className="titleh3">Detalle del Pedido</h3>
            <section className="datos-container">
                <div className="datosyproductos-container">
                    <h4 className="titleh4">DATOS</h4>
                    <p className="datosP"><span className="datosSpan">Nombre:</span> Juan</p>
                    <p className="datosP"><span className="datosSpan">E-mail:</span> juan@juan123.com</p>
                    <p className="datosP"><span className="datosSpan">Dirección:</span> Calle Falsa 123</p>
                    <p className="datosP"><span className="datosSpan">Teléfono:</span> 11525252525</p>
                </div>
                <div className="datosyproductos-container">
                    <h4 className="titleh4">PRODUCTOS</h4>
                    <p className="datosP">Producto 1</p>
                    <p className="datosP">Producto 1</p>
                    <p className="datosP">Producto 1</p>
                    <p className="datosP">Producto 1</p>
                </div>
            </section>
        </div>
    )
}