import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Garage from './Garage.jsx'
import Component from './Componenet'



createRoot(document.getElementById('root')).render(
   <StrictMode>
    {/* <App/> */}
    {/* <Garage/> */}
    <Component/>
  </StrictMode>
)

