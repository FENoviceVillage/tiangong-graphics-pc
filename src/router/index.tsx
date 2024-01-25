import React from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const About = React.lazy(() => import('../pages/About'))
const Home = React.lazy(() => import('../pages/home'))
const Quote = React.lazy(() => import('../pages/quote'))
const Instructions = React.lazy(() => import('../pages/instructions'))

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
  {
    path: '/quote',
    id: 'quote',
    element: <Quote />,
  },
  {
    path: '/instructions',
    id: 'instructions',
    element: <Instructions />,
  },
])

export default router
