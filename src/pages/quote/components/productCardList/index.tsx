import React from 'react'
import styles from './index.module.scss'
import ProductCard from '../productCard'

interface Props { }

function ProductCardList(props: Props) {
  return (
    <div>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductCardList
