import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '@/pages/about'
import Dynamic from '@/pages/dynamic'
import Home from '@/pages/home'
import Instructions from '@/pages/instructions'
import Products from '@/pages/products'
import Quote from '@/pages/quote'

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
        path: '/products/:category',
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
