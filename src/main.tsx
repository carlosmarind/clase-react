import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPage } from './page/AboutPage'
import { HomePage } from './page/HomePage'
import { PokemonPage } from './page/Playground/PokemonPage'
import { StrictMode } from 'react'
import { ImageFormPage } from './page/Playground/ImageFormPage'
import { Provider } from 'react-redux'
import { store } from './states/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FollowUrlPage } from './page/Labs/FollowUrlPage'
import { NotFoundPage } from './page/NotFoundPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
          <Route path="/image-form" element={<ImageFormPage />} />
          <Route path="/labs">
            <Route path="api-discovery" element={<FollowUrlPage />} />
          </Route>
          <Route path="/about" element={<AboutPage title="Sobre nostros" />} />
          <Route path="*" element={<NotFoundPage />} />
          {
            //<Route path="/detalle-personaje/:id" element={<DetallePersonaje />} />
            //<Route path="/login" element={<LoginPage />} />
            //<Route path="/auth" element={<AuthPage />} />
            //<Route path="/user-lab" element={<FollowUrlPage />} />
            //<Route path="/admin" element={<PrivateRoute roles={["admin", "user"]}><AdminPage /></PrivateRoute>} />
            //<Route path="/posts" element={<PrivateRoute roles={["admin", "user"]}><PostPage /></PrivateRoute>} />
            //<Route path="/dashboard" element={<DashboardPage />}>
            //  <Route index element={<div>Contenido general del dashboard</div>} />
            //  <Route path="detalle" element={<div>Contenido detalle del dashboard</div>} />
            //</Route>
            //
            //
          }
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
