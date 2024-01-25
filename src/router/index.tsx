import { Navigate, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import App from '../App'

const About = React.lazy(() => import('../pages/About'))

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
        element: <About />,
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
