import React from 'react'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter,HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <App />
    </HashRouter>
);
