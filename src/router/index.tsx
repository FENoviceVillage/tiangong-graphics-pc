import React, { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'

const About = lazy(() => import('@/pages/About/index'))
const Home = lazy(() => import('@/pages/home/index'))
const Quote = React.lazy(() => import('../pages/quote'))
const Instructions = React.lazy(() => import('../pages/instructions'))
const Dynamic = lazy(() => import('@/pages/dynamic/index'))

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
        id: '/about',
        path: '/about',
        element: <About />,
      },
      {
        id: '/api',
        path: '/api',
        element: <About />,
      },
      {
        id: '/quote',
        path: '/quote',
        element: <Quote />,
      },
      {
        id: '/dynamic',
        path: '/dynamic',
        element: <Dynamic />,
      },
      {
        id: '/join',
        path: '/join',
        element: <About />,
      },
      {
        path: '/instructions',
        element: <Instructions />,
      },
    ],

  },
  {
    path: '*',
    element: <Navigate to="/home" />,
  },
])

export default router
