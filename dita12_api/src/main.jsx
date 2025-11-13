import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Crypto from './crypto.jsx'

import Movies from './Movies.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Movies />
  </StrictMode>,
)
