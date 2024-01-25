import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import router from '../../router'

function PageBody() {
  return (
    <body>
      <Outlet />
    </body>
  )
}

export default PageBody
