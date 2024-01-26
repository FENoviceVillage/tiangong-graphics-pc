import React, { useState } from 'react'
import styles from './index.module.scss'
import Header from './components/header'
import Main from './components/main'
import ProductCardList from './components/productCardList'
import RelatedProducts from './components/relatedProducts'
import { Top } from './components/top'

export const Quote: React.FC = () => {
  const [bbbbbb, $bbbbbb] = useState()
  return (
    <div className={styles.layout}>
      <div className={styles.center}>
        <div className={styles.main}>
          {/* <Header /> */}
          {/* <Main /> */}
          <article>
            <Top />
            <ProductCardList />
          </article>
        </div>
        <RelatedProducts products={['智能制造报价系统', '工程师笔记本']} />
      </div>

    </div>
  )
}
export default Quote
