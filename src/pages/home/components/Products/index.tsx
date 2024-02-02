import Product from './components/Product'
import styles from './index.module.scss'
import { useAppStore } from '@/store'

function Index() {
  const products = useAppStore(state => state.products)
  return (
    <div className={styles.flex}>
      {
        products.map((product, index) => {
          return index % 2 === 0 ? <Product key={product.id} data={product?.attributes} index={index + 1} /> : <Product key={product.id} data={product?.attributes} isVideoleft={false} index={index + 1} />
        })
      }
    </div>
  )
}

export default Index
