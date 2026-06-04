import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import RootLayout from './components/root-layout'
import IdsPage from './pages/ids-page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path='ids' element={<IdsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
