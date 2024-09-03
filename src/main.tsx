import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DragonBallz } from './components/DragonBallz.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DragonBallz />
  </StrictMode>,
)
