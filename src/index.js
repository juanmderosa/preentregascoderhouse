import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import "./firebase/config"
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/config';
initializeApp(firebaseConfig)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);


