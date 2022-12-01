import React, { useState } from "react"
export const OrderContext = React.createContext([])

export const OrderProvider = ({children}) =>{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [formaDePago, setformaDePago] = useState("")

    return(
        <OrderContext.Provider value={{
            name,
            email,
            address,
            phone,
            formaDePago,
            setName,
            setEmail,
            setAddress,
            setPhone,
            setformaDePago
        }}>
            {children}
        </OrderContext.Provider>
    )
}