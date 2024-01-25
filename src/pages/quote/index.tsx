import React, { useState } from 'react'
import styles from './index.module.scss'
import Header from './components/header';
import Main from './components/main';
import ProductCardList from './components/productCardList';
import RelatedProducts from './components/relatedProducts';

export const Quote: React.FC = () => {
  const [bbbbbb, $bbbbbb] = useState()
  return (
    <div className={styles.main}>
      <RelatedProducts products={['智能制造报价系统','工程师笔记本']}/>
      <Header/>
      <Main />
      <ProductCardList/>
    </div>
  )
};
export default Quote