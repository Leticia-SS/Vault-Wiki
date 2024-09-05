import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import Descent from './Cast/Descent.jsx'
import Archetypes from './Cast/Archetypes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Archetypes/>
    <Descent />
  </StrictMode>,
)
