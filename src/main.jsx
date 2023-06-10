import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AppLayout } from './layouts/Application.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppLayout>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppLayout>
)
