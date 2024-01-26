import React from 'react'
import ProductCard from '../productCard'
import styles from './index.module.scss'

interface Props { }

function ProductCardList(props: Props) {
  return (
    <div className={styles.bgc}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductCardList
