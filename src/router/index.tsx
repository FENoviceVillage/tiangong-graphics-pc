import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'

const About = lazy(() => import('@/pages/about/index'))
const Home = lazy(() => import('@/pages/home/index'))
const Quote = lazy(() => import('@/pages/quote'))
const Instructions =lazy(() => import('@/pages/instructions'))
const Dynamic = lazy(() => import('@/pages/dynamic/index'))
const Products = lazy(()=>import('@/pages/products/index'))

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
        id: '/about',
        path: '/about',
        element: <About />,
      },
      {
        id: '/instructions',
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
