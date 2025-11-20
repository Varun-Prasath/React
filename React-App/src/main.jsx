import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CarsList from './CarsList.jsx'
import Form from './Form.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element : <CarsList />
  },
  {
    path : '/form',
    element : <Form />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <App />
  </StrictMode>,
)
