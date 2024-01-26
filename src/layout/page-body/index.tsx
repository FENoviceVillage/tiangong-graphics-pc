import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function PageBody() {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  )
}

export default PageBody
