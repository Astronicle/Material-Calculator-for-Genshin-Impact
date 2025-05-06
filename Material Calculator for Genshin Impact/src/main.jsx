import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Calculator from './components/Calculator.jsx'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Navbar/>
      <Calculator/>
      <Analytics />
    </>
  </StrictMode>,
)
