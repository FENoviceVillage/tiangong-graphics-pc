import React from 'react'
import ProductCard from '../productCard'
import styles from './index.module.scss'
import { useAppStore } from '@/store'

function ProductCardList() {
  const appStore = useAppStore()

  return (
    <div className={styles.bgc}>
      {
        appStore.products.map((item, index) =>
          <ProductCard key={index} Product={item} />,
        )
      }

    </div>
  )
}

export default ProductCardList
