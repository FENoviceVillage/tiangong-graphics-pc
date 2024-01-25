import React from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'

const About = React.lazy(() => import('../pages/About'))
const Home = React.lazy(() => import('../pages/home'))

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
        id: '/price',
        path: '/price',
        element: <About />,
      },
      {
        id: '/instruction',
        path: '/instruction',
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
    ],
  },
])

export default router
