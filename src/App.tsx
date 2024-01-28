import PageBody from '@/layout/page-body'
import PageFooter from '@/layout/page-footer'
import PageHeader from '@/layout/page-header'
import { useEffect } from 'react'
import { useAppStore } from './store'

function App() {
  const appStore = useAppStore()

  useEffect(() => {
    appStore.getProductsInfo()
    appStore.getVideosInfo()
    appStore.getNewsInfo()
  }, [])
  return (
    <>
      <PageHeader></PageHeader>
      <PageBody></PageBody>
      <PageFooter></PageFooter>
    </>
  )
}

export default App
