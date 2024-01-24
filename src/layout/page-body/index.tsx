import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '../../router'


interface Props {}

function PageBody(props: Props) {
  return (
    <RouterProvider router={router} />
  )
}

export default PageBody
