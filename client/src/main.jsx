import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ModalProvider } from './Contexts/ModelContext.jsx'

createRoot(document.getElementById('root')).render(

   <ModalProvider>
    <App />
  </ModalProvider>

)
