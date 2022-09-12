import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
/* import { provider } from 'react-redux'; */

import App from './components/App';
import "./styles/css/index.css";

// TODO: Si trabajamos con Redux, aquí haríamos el STORE y aplicaríamos el middleware de Redux Saga

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
