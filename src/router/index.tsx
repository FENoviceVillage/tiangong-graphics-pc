import React, { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Products from '@/pages/products'

const About = lazy(() => import('@/pages/about/index'))
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
        id: '/about',
        path: '/about',
        element: <About />,
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
