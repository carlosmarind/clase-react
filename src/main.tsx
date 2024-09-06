import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './page/NotFoundPage'
import { AboutPage } from './page/AboutPage'
import { HomePage } from './page/HomePage'
import { PersonajesPage } from './page/PersonajesPage'
import { DetallePersonaje } from './page/DetallePersonaje'
import { DashboardPage } from './page/DashboardPage'
import { AdminPage } from './page/AdminPage'
import { PrivateRoute } from './components/PrivateRoute'
import { LoginPage } from './page/LoginPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personajes" element={<PersonajesPage />} />
        <Route path="/detalle-personaje/:id" element={<DetallePersonaje />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<div>Contenido general del dashboard</div>} />
          <Route path="detalle" element={<div>Contenido detalle del dashboard</div>} />
        </Route>
        <Route path="/about" element={<AboutPage title="Sobre nostros" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
