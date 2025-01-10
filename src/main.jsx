import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {DarkModeProvider} from "@/context/DarkModeProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DarkModeProvider>
          <div className="fixed flex w-full h-64 justify-center items-center z-0 rounded-full pointer-events-none">
              <div className="h-full w-full bg-center-radial-blur bg-center border bg-no-repeat bg-blend-overlay blur-[90px]"/>
              <div className="h-full w-full bg-center-radial-red bg-center bg-no-repeat bg-blend-overlay blur-[90px]"/>
          </div>

          <App/>
      </DarkModeProvider>
  </StrictMode>,
)
