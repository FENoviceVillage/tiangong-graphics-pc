import { Navigate, createBrowserRouter } from 'react-router-dom'
import React from 'react'

const About = React.lazy(() => import('../pages/About'))

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

])

export default router
