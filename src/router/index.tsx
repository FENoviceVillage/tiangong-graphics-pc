import { Navigate, createBrowserRouter } from 'react-router-dom'
import React from 'react'

const About = React.lazy(() => import('../pages/about'))
const Products = React.lazy(() => import('../pages/products'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    id: 'home',
    element: <About />,
  },
  {
    path: '/about',
    id: 'about',
    element: <About />,
  },
  {
    path: '/products',
    id: 'products',
    element: <Products />,
  },

])

export default router
