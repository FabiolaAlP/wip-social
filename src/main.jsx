import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes.jsx'
const router = createBrowserRouter(AppRoutes);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
