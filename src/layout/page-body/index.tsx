import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import router from '../../router'

function PageBody() {
  return (
    <Outlet />
  )
}

export default PageBody
