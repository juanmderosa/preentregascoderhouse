import React from 'react';
import {NavBar} from "./componentes/Navbar"
import {ItemListContainer} from "./componentes/ItemListContainer"
import {ItemDetailContainer} from "./componentes/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cart} from "./componentes/Cart"


export const App = () =>{
    return(
        <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting="TUTOR"/>} />
                <Route path='/categoria/:categoriaID' element={<ItemListContainer/>} />
                <Route path='/detalle/:detalleID' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </BrowserRouter>
        
        </>
    )
    
}