import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CarsList from './CarsList.jsx'
import Form from './Form.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Blog from './Blog'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/blog',
    element : <Blog />
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
