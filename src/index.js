import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {NavBar} from "./componentes/Navbar"
import "./componentes/Navbar.css"
import {ItemListContainer} from "./componentes/ItemListContainer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <NavBar/>
    <ItemListContainer greeting="TUTOR"/>
</>
);

