import React from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'

const About = React.lazy(() => import('../pages/about'))
const Products = React.lazy(() => import('../pages/products'))

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        id: '/',
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        id: '/home',
        path: '/home',
        element: <Home />,
      },
      {
        id: '/products',
        path: '/products',
        element: <Products />,
      },
      {
        id: '/api',
        path: '/api',
        element: <About />,
      },
      {
        id: '/price',
        path: '/price',
        element: <About />,
      },

      {
        id: '/dynamic',
        path: '/dynamic',
        element: <About />,
      },
      {
        id: '/join',
        path: '/join',
        element: <About />,
      },
      {
        id: '/about',
        path: '/about',
        element: <About />,
      },
    ],
  },
])

export default router
