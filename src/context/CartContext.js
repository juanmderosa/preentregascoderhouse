import React, { useState } from "react"
export const CartContext = React.createContext([])

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const clearCart = () =>setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (item, cantidad) => {

        if(isInCart(item.id)){   
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad} : product
            }))
        }else{
            setCart([...cart,{...item, cantidad}])
        }

    }

    return(
        <CartContext.Provider value={{
            addProduct,
            clearCart,
            isInCart,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}