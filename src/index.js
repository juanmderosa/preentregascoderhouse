import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {NavBar} from "./componentes/Navbar"
import "./componentes/Navbar.css"
import {ItemListContainer} from "./componentes/ItemListContainer"
import {ItemCount} from "./componentes/ItemCount"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <NavBar/>
    <ItemListContainer greeting="TUTOR"/>
    <ItemCount stock="5" initial="1" onAdd={true}/>
</>
);

