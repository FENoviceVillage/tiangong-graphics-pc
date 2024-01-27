import { useEffect } from 'react'
import { useAppStore } from './store'
import PageFooter from '@/layout/page-footer'
import PageHeader from '@/layout/page-header'
import PageBody from '@/layout/page-body'

function App() {
  const appStore = useAppStore()

  useEffect(() => {
    appStore.getProductsInfo()
    appStore.getVideosInfo()
    appStore.getNewsInfo()
  }, [])
  console.log(appStore.products, appStore.news, appStore.videos)

  return (
    <>
      <PageHeader></PageHeader>
      <PageBody></PageBody>
      <PageFooter></PageFooter>
    </>
  )
}

export default App
