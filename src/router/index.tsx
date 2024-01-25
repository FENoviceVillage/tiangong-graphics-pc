import React from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const About = React.lazy(() => import('../pages/About'))
const Home = React.lazy(() => import('../pages/home'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    id: 'home',
    element: <Home />,
  },
  {
    path: '/about',
    id: 'about',
    element: <About />,
  },

])

export default router
