import React, { useState } from 'react'
import styles from './index.module.scss'
import Header from './components/header';
import Main from './components/main';
import ProductCardList from './components/productCardList';

export const Quote: React.FC = () => {
  const [bbbbbb, $bbbbbb] = useState()
  return (
    <div className={styles.main}>
      <Header/>
      <Main />
      <ProductCardList/>  
    </div>
  )
};
export default Quote