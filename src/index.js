import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { Context } from './pages/context/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context>
        <App />
    </Context>
);
