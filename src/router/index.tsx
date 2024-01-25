import { Navigate, createBrowserRouter } from 'react-router-dom'
import React from 'react'

const About = React.lazy(() => import('../pages/About'))
const Quote = React.lazy(() => import('../pages/quote'))

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
    path: '/quote',
    id: 'quote',
    element: <Quote />,
  },

])

export default router
