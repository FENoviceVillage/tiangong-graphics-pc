import { useAppStore } from '@/store'
import Product from './components/Product'
import styles from './index.module.scss'

function Index() {
  const products = useAppStore(state => state.products)
  return (
    <div className={styles.flex}>
      {
        products.map((product, index) => {
          return index % 2 === 0 ? <Product key={product.id} data={product?.attributes} /> : <Product key={product.id} data={product?.attributes} isVedioleft={false} />
        })
      }
    </div>
  )
}

export default Index
