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
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/api',
        element: <About />,
      },
      {
        path: '/price',
        element: <About />,
      },
      {
        path: '/instruction',
        element: <About />,
      },
      {
        path: '/dynamic',
        element: <About />,
      },
      {
        path: '/join',
        element: <About />,
      },
    ],
  },
])

export default router
