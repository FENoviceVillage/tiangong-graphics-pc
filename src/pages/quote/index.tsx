import React, { useState } from 'react'
import ContactUs from '../../components/contactUs/index'
import styles from './index.module.scss'
import Header from './components/header'
import Main from './components/main'
import ProductCardList from './components/productCardList'
import RelatedProducts from './components/relatedProducts'
import { Top } from './components/top'

export const Quote: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.center}>
        <div className={styles.main}>
          <article>
            <Top />
            <ProductCardList />
          </article>
        </div>
        <aside className={styles.aside}>
          <RelatedProducts products={['智能制造报价系统', '工程师笔记本']} />
          <ContactUs containerClassName={styles.contact}></ContactUs>
        </aside>
      </div>

    </div>
  )
}
export default Quote
