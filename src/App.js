import React from 'react';
import {NavBar} from "./componentes/Navbar"
import {ItemListContainer} from "./componentes/ItemListContainer"
import {ItemDetailContainer} from "./componentes/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cart} from "./componentes/Cart"
import { CartProvider } from './context/CartContext';
import { Checkout } from './componentes/Checkout';
import { Footer } from './componentes/Footer';
import { OrderProvider } from './context/OrderContext';

export const App = () =>{
    return(
    <>
        <BrowserRouter>
            <OrderProvider>
            <CartProvider>
                <NavBar/>
                    <Routes>
                        <Route exact path='/' element={<ItemListContainer/>} />
                        <Route exact path='/categoria/:categoriaID' element={<ItemListContainer/>} />
                        <Route exact path='/detalle/:detalleID' element={<ItemDetailContainer/>} />
                        <Route exact path='/cart' element={<Cart/>} />
                        <Route exact path='/checkout' element={<Checkout/>} />
                    </Routes>
            </CartProvider>
            </OrderProvider>
            <Footer/>
        </BrowserRouter>

        </>
    );
}